-- Active: 1680778890571@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users VALUES
("U001", "cliente1@laala.com", "123456"),
("U002", "cliente2@laala.com", "6789"),
("U003", "cliente3@laala.com", "9012");

CREATE TABLE products (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

SELECT * FROM products;

INSERT INTO products VALUES 
    ("P001", "Memoria Ram", 25.000, "ELECTRONICS"),
    ("P002", "Placa Mãe", 95.000, "ELECTRONICS"),
    ("P003", "Tenis", 15.000, "CLOTHES_AND_SHOES"),
    ("P004", "Pulseira", 5.000, "ACCESSORIES"),
    ("P005", "Moleton", 15.000, "CLOTHES_AND_SHOES");