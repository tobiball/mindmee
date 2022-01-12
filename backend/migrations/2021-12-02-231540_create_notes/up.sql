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
    valence VARCHAR NOT NULL,
    arousal VARCHAR NOT NULL,
    activity_level VARCHAR NOT NULL,
    activity_valence VARCHAR NOT NULL,
    PRIMARY KEY (id)
);