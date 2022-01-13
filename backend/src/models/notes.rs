
use serde::{Serialize, Deserialize};
use uuid::Uuid;

use crate::diesel_schema::notes;


#[derive(AsChangeset, Queryable, Insertable, Serialize, Deserialize)]
#[table_name = "notes"]
pub struct Note {
    pub id: Uuid,
    pub uid: String,
    pub timestamp: chrono::NaiveDateTime,
    pub valence: i16,
    pub arousal: i16,
    pub activity_level: i16,
    pub activity_valence: i16,
}
