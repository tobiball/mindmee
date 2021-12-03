use uuid::Uuid;

use crate::diesel_schema::notes;


#[derive(Serialize, Deserialize)]
pub struct NoteCreate {
    pub id: Option<Uuid>,
    pub uid: String,
    pub timestamp: String,
    pub measure1: String,
}

#[derive(Serialize, Deserialize, AsChangeset, Identifiable)]
#[table_name = "notes"]
pub struct NoteUpdate {
    pub id: Uuid,
    pub uid: Option<String>,
    pub timestamp: Option<String>,
    pub measure1: Option<String>,
}