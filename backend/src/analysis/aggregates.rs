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
    let mut week;


    // let mut week_counter: HashMap<u32, Vec<i16,u8>> = HashMap::new();
    // for note in copy_results {
    //     week = note.timestamp.iso_week().week();
    //     *week_counter.entry(week).or_insert(0) += 1;
    //
    // }

    ///////////////////COLLECT V ECTOR OF NOTES ACTUIALLY? OR SHOULD I S3EPERATE IN THE API WHICH MEASURMEWNT I WANNA QUERRY FOR ALREADY
    let mut data: HashMap<u32,i16> = HashMap::new();
    let mut week_counter: HashMap<u32,i16> = HashMap::new();
    for note in results {
        week = note.timestamp.iso_week().week();
        if !data.contains_key(&week){
            data.insert(week, note.valence);
            week_counter.insert(week, 1);
        }
        else{
            *data.get_mut(&week).unwrap() += note.valence;
            *week_counter.get_mut(&week).unwrap() += 1;
        }
    }

    for (key, value) in week_counter {
        *data.get_mut(&key).unwrap() /= value;
        println!("bubu {}: {}", key, value);
        }



    // for (key, value) in &data {
    //     println!("bubu {}: {}", key, value);
    // }

      Ok(data)
    // Ok(data)



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