table! {
    notes (id) {
        id -> Uuid,
        uid -> Varchar,
        timestamp -> Varchar,
        measure1 -> Varchar,
    }
}

table! {
    users (id) {
        id -> Uuid,
        username -> Varchar,
        is_active -> Bool,
    }
}

allow_tables_to_appear_in_same_query!(
    notes,
    users,
);
