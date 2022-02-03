use anyhow::Result;
use chrono::Datelike;
use diesel::dsl::{not, sum};
use diesel::pg::PgConnection;
use diesel::prelude::*;
use diesel::sql_query;
use uuid::Uuid;
use std::collections::HashMap;
use crate::analysis::aggregates::notes::uid;



use crate::diesel_schema::notes;
use crate::diesel_schema::notes::timestamp;
use crate::models::notes::Note;


pub fn analyse(db: &PgConnection, obj_id: String) -> Result<HashMap<u32, i16>> {

    //sql query
    let results = notes::table

        .order(timestamp)
        .filter(uid.eq(obj_id))
        .load::<Note>(db)
        .expect("Error loading posts")
        ;
        // .get_result::<Note>(db)?;
    //
    //     let res = sql_query("SELECT sum(valence), 1 FROM notes GROUP BY timestamp")
    //      .load::<Point>(db);
    let mut data = HashMap::new();

    let mut week;
    for note in results {
        week = note.timestamp.iso_week().week();
        if !data.contains_key(&week){
            data.insert(week, note.valence);
        }
        else{
            *data.get_mut(&week).unwrap() += note.valence;
        }
    }

    for (key, value) in &data {
        println!("bubu {}: {}", key, value);
    }

    Ok(data)


    // let stat = data.entry(week).or_insert(note.valence);
    // *stat += note.valence;
    // for (key, value) in &data {
    //     println!("{}: {}", key, value);
    // }\z
    // data.insert(week, note.valence);
    // data.merge(week, note.valence, (v1, v2) -> { return v1 + v2; });

//
//     //data aggregation calculation
//     let mut blobl = Blob;
//     let mut blobs = Vec::<Blob>::new();
//     let mut week_nr = Vec::i32::new();
//     let mut week;
//
//     let mut sum : i32 = 0;
//     for note in results {
// //         week = note.timestamp.iso_week().week();
// //         if week_nr.contains(week):
// //
// //
// //         blobs.push(Blob{
// //             week: note.timestamp.iso_week().week(),
// //             valence: note.valence});
// //         println!("{:?}", blobs);
//         println!("{}", note.valence);
//         println!("{}", note.timestamp.iso_week().week());
// }

        // print_type_of&results);
    // println!("{}", note.id);
    // println!("----------\n");

    // sum = sum + note.valence as i32;
//




}

pub fn analysex(db: &PgConnection, obj_id: Uuid) -> Result<Note> {
    let note = notes::table.find(obj_id).get_result::<Note>(db)?;
    Ok(note)
}