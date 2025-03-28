CREATE TABLE users (
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    created_ts TIMESTAMP,
    updated_ts TIMESTAMP,
    deleted_ts TIMESTAMP,
    active BOOLEAN
);