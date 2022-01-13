use anyhow::Result;
use rocket::Rocket;
use rocket_contrib::json::Json;
use rocket_contrib::uuid::Uuid as RocketUuid;
use uuid::Uuid;

use crate::crud::notes;
use crate::db::guard::DbConn;
use crate::models::notes::Note;
use crate::schemas::notes::{NoteCreate, NoteUpdate};

use crate::analysis::notez;



#[post("/", format = "json", data = "<obj_in>")]
fn create(obj_in: Json<NoteCreate>, db: DbConn) -> Result<Json<Note>> {
    let inserted_note = notes::create(&db, obj_in.0)?;
    notez::analyse(&db);
    Ok(Json(inserted_note))
}

#[get("/<obj_id>")]
fn read(obj_id: RocketUuid, db: DbConn) -> Result<Json<Note>> {
    let uuid = Uuid::from_bytes(*obj_id.as_bytes());
    let found_note = notes::find(&db, uuid)?;
    Ok(Json(found_note))
}

#[patch("/", format = "json", data = "<obj_in>")]
fn update(obj_in: Json<NoteUpdate>, db: DbConn) -> Result<Json<Note>> {
    let updated_note = notes::update(&db, &obj_in.0)?;
    Ok(Json(updated_note))
}

#[delete("/<obj_id>")]
fn delete(obj_id: RocketUuid, db: DbConn) -> Result<Json<Note>> {
    let uuid = Uuid::from_bytes(*obj_id.as_bytes());
    let deleted_note = notes::delete(&db, uuid)?;
    Ok(Json(deleted_note))
}

// pub fn fuel(rocket: Rocket) -> Rocket {
//     rocket.mount("/api/notes", routes![notes/create, read, update, delete])
// }


use crate::crud::users;
use crate::models::users::User;
use crate::schemas::users::{UserCreate, UserUpdate};

#[post("/", format = "json", data = "<obj_in>")]
fn create_user(obj_in: Json<UserCreate>, db: DbConn) -> Result<Json<User>> {
    let inserted_user = users::create(&db, obj_in.0)?;
    Ok(Json(inserted_user))
}

#[get("/<obj_id>")]
fn read_user(obj_id: RocketUuid, db: DbConn) -> Result<Json<User>> {
    let uuid = Uuid::from_bytes(*obj_id.as_bytes());
    let found_user = users::find(&db, uuid)?;
    Ok(Json(found_user))
}

#[patch("/", format = "json", data = "<obj_in>")]
fn update_user(obj_in: Json<UserUpdate>, db: DbConn) -> Result<Json<User>> {
    let updated_user = users::update(&db, &obj_in.0)?;
    Ok(Json(updated_user))
}

#[delete("/<obj_id>")]
fn delete_user(obj_id: RocketUuid, db: DbConn) -> Result<Json<User>> {
    let uuid = Uuid::from_bytes(*obj_id.as_bytes());
    let deleted_user = users::delete(&db, uuid)?;
    Ok(Json(deleted_user))
}

pub fn fuel(rocket: Rocket) -> Rocket {
    rocket.mount("/api/users", routes![create_user, read_user, update_user, delete_user])
        .mount("/api/notes", routes![create, read, update, delete])

}