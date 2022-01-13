extern crate chrono;

use chrono::{NaiveDateTime};


use uuid::Uuid;

use crate::diesel_schema::notes;


#[derive(Serialize, Deserialize)]
pub struct NoteCreate {
    pub id: Option<Uuid>,
    pub uid: String,
    pub timestamp: chrono::NaiveDateTime,
    pub valence: i16,
    pub arousal: i16,
    pub activity_level: i16,
    pub activity_valence: i16,
}

#[derive(Serialize, Deserialize, AsChangeset, Identifiable)]
#[table_name = "notes"]
pub struct NoteUpdate {
    pub id: Uuid,
    pub uid: Option<String>,
    pub timestamp: Option<chrono::NaiveDateTime>,
    pub valence: Option<i16>,
    pub arousal: Option<i16>,
    pub activity_level: Option<i16>,
    pub activity_valence: Option<i16>,
}