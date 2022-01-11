use uuid::Uuid;

use crate::diesel_schema::notes;


#[derive(Serialize, Deserialize)]
pub struct NoteCreate {
    pub id: Option<Uuid>,
    pub uid: String,
    pub timestamp: String,
    pub valence: String,
    pub arousal: String,
    pub activity_level: String,
    pub activity_valence: String,
}

#[derive(Serialize, Deserialize, AsChangeset, Identifiable)]
#[table_name = "notes"]
pub struct NoteUpdate {
    pub id: Uuid,
    pub uid: Option<String>,
    pub timestamp: Option<String>,
    pub valence: Option<String>,
    pub arousal: Option<String>,
    pub activity_level: Option<String>,
    pub activity_valence: Option<String>,
}