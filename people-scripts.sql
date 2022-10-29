CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

INSERT INTO
    people (first_name, last_name)
VALUES
    ('Kevin', 'Lopez'),
    ('Carter', 'Steinhoff'),
    ('Sam', 'Spade')