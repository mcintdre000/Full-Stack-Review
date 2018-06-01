DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    auth0_id TEXT UNIQUE,
    name TEXT,
    email TEXT,
    photo TEXT
);