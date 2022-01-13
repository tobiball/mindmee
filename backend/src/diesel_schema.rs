table! {
    notes (id) {
        id -> Uuid,
        uid -> Varchar,
        timestamp -> Timestamp,
        valence -> Int2,
        arousal -> Int2,
        activity_level -> Int2,
        activity_valence -> Int2,
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
