use chrono::{NaiveDate, NaiveDateTime};

use serde::{Serialize, Serializer, Deserialize, Deserializer};
use uuid::Uuid;

use crate::diesel_schema::notes;






#[derive(AsChangeset, Queryable, Insertable, Serialize, Deserialize)]
#[table_name = "notes"]
pub struct Note {
    pub id: Uuid,
    pub uid: String,
    pub timestamp: chrono::NaiveDateTime,
    pub valence: String,
    pub arousal: String,
    pub activity_level: String,
    pub activity_valence: String,
}
