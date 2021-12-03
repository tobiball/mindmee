use uuid::Uuid;

use crate::diesel_schema::users;

#[derive(AsChangeset, Queryable, Insertable, Serialize, Deserialize)]
#[table_name = "users"]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub is_active: bool,
}
