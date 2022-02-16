use anyhow::Result;
use chrono::Datelike;
use diesel::dsl::{date, not, sum};
use diesel::pg::PgConnection;
use diesel::prelude::*;
use diesel::sql_query;
use uuid::Uuid;
use std::collections::HashMap;
use crate::analysis::aggregates::notes::uid;
use crate::diesel_schema::notes;
use crate::diesel_schema::notes::{timestamp, valence};
use crate::models::notes::Note;
use std::ops::{Index, IndexMut};

impl Index<&'_ str> for Note {
    type Output = i16;
    fn index(&self, s: &str) -> &i16 {
        match s {
            "valence" => &self.valence,
            "arousal" => &self.arousal,
            "activity_level" => &self.activity_level,
            "activity_valence" => &self.activity_valence,
            _ => panic!("unknown field: {}", s),
        }
    }
}

impl IndexMut<&'_ str> for Note {
    fn index_mut(&mut self, s: &str) -> &mut i16 {
        match s {
            "valence" => &mut self.valence,
            "arousal" => &mut self.arousal,
            "activity_level" => &mut self.activity_level,
            "activity_valence" => &mut self.activity_valence,
            _ => panic!("unknown field: {}", s),
        }
    }
}
pub fn analyse(db: &PgConnection, obj_id: String, affect_dimension: String) -> Result<HashMap<u32, i16>> {
    //sql query
    let results = notes::table
        .order(timestamp)
        .filter(uid.eq(obj_id))
        .load::<Note>(db)
        .expect("Error loading posts");

    let mut week;
    let mut affect_data: HashMap<u32, i16> = HashMap::new();
    let mut week_counter: HashMap<u32,i16> = HashMap::new();
    //aggregate all results and sum
    for note in results {
        week = note.timestamp.iso_week().week();
        if !affect_data.contains_key(&week){
            affect_data.insert(
                week,
                note[&affect_dimension]
            );
            week_counter.insert(week, 1);
        }
        else{
            *affect_data.get_mut(&week).unwrap() += note[&affect_dimension];
            *week_counter.get_mut(&week).unwrap() += 1;
        }
    }
    for (key, value) in week_counter {
        *affect_data.get_mut(&key).unwrap() /= value;
        // println!(" {}: {}", key, value);
    }
     Ok(affect_data)
}

// pub fn analysex(db: &PgConnection, obj_id: Uuid) -> Result<Note> {
//     let note = notes::table.find(obj_id).get_result::<Note>(db)?;
//     Ok(note)
// }