DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    author VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    year_published SMALLINT NOT NULL
);

INSERT INTO books (author, title, year_published) 
VALUES 
    ('Orson Scott Card', 'Enders Game', 1985),
    ('Tyrone Johnson', 'Halo', 1822),
    ('Whitman Banks', 'Dolla Bills', 2012), 
    ('Jeff Bezos', 'Makin Money is what I do', 2022),
    ('Tupac', 'Im back and better than ever', 2022);