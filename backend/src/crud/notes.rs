use anyhow::Result;
use diesel::insert_into;
use diesel::pg::PgConnection;
use diesel::prelude::*;
use uuid::Uuid;

use crate::diesel_schema::notes;
use crate::models::notes::Note;
use crate::schemas::notes::{NoteCreate, NoteUpdate};

pub fn create(db: &PgConnection, obj_in: NoteCreate) -> Result<Note> {
    use crate::diesel_schema::notes::dsl::*;
    let mut new_note = Note {
        id: Uuid::new_v4(),
        uid: obj_in.uid,
        timestamp: obj_in.timestamp,
        valence: obj_in.valence,
        arousal: obj_in.arousal,
        activity_level: obj_in.activity_level,
        activity_valence: obj_in.activity_valence,
    };
    new_note = insert_into(notes)
        .values(&new_note)
        .on_conflict_do_nothing()
        .get_result(db)?;
    Ok(new_note)
}

pub fn find(db: &PgConnection, obj_id: Uuid) -> Result<Note> {
    let note = notes::table.find(obj_id).get_result::<Note>(db)?;
    Ok(note)
}

pub fn update(db: &PgConnection, obj_in: &NoteUpdate) -> Result<Note> {
    let updated_note = diesel::update(obj_in).set(obj_in).get_result(db)?;
    Ok(updated_note)
}

pub fn delete(db: &PgConnection, obj_id: Uuid) -> Result<Note> {
    use crate::diesel_schema::notes::dsl::*;
    let deleted_note = diesel::delete(notes.filter(id.eq(obj_id))).get_result(db)?;
    Ok(deleted_note)
}
