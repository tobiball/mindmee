CREATE TABLE IF NOT EXISTS users
(
    id uuid,
    username VARCHAR NOT NULL UNIQUE,
    is_active BOOLEAN NOT NULL DEFAULT 'f',
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS notes
(
    id uuid,
    uid VARCHAR NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    valence SmallInt NOT NULL,
    arousal SmallInt NOT NULL,
    activity_level SmallInt NOT NULL,
    activity_valence SmallInt NOT NULL,
    PRIMARY KEY (id)
);