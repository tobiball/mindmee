table! {
    notes (id) {
        id -> Uuid,
        uid -> Varchar,
        timestamp -> Varchar,
        valence -> Varchar,
        arousal -> Varchar,
        activity_level -> Varchar,
        activity_valence -> Varchar,
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
