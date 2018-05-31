CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth0_id TEXT,
    name TEXT,
    email TEXT,
    photo TEXT
);