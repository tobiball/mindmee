use uuid::Uuid;

use crate::diesel_schema::notes;

#[derive(AsChangeset, Queryable, Insertable, Serialize, Deserialize)]
#[table_name = "notes"]
pub struct Note {
    pub id: Uuid,
    pub uid: String,
    pub timestamp: String,
    pub measure1: String,
}
