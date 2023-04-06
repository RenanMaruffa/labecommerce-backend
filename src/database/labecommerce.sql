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
    ("P001", "Memoria Ram", 125.000, "ELECTRONICS"),
    ("P002", "Placa Mãe", 95.000, "ELECTRONICS"),
    ("P003", "Tenis", 15.000, "CLOTHES_AND_SHOES"),
    ("P004", "Pulseira", 5.000, "ACCESSORIES"),
    ("P005", "Moleton", 15.000, "CLOTHES_AND_SHOES");


-- Get All Users - retorna todos os usuários cadastrados
SELECT * FROM users;

-- Get All Products - retorna todos os produtos cadastrados
SELECT * FROM products;

-- Search Product by name - crie um termo de busca, por exemplo "monitor" e retorna o resultado baseado no termo de busca
SELECT * FROM products
WHERE name LIKE "Pl%";

-- Create User - crie um novo usuário e insere o item mockado na tabela users
INSERT INTO users VALUES
("U004", "cliente4@laala.com", "9090");

-- Create Product - crie um novo produto e insere o item mockado na tabela products
INSERT INTO products VALUES
("P006", "Gabinete", 155.000, "ELECTRONICS");

-- Get Products by id - busca de produtos por id
SELECT * FROM products
WHERE id LIKE "P0066";

-- Delete User by id - deleção de user por id
DELETE FROM users
WHERE id = "U004";

-- Delete Product by id - deleção de produto por id
DELETE FROM products
WHERE id = "P0066";

--USAR = quando a busca é ESPECIFICA (como é o caso de um ID) ao invez de LIKE

-- Edit User by id - edição de user por id
UPDATE users
SET email = "novocliente2@laala.com"
WHERE id = "U002";

-- Edit Product by id - edição de produto por id
UPDATE products
SET price = 125.000
WHERE id = "P001";

--Get All Users - retorna o resultado ordenado pela coluna email em ordem crescente
SELECT * FROM users
ORDER BY email ASC;

-- Get All Products versão 1 - retorna o resultado ordenado pela coluna price em ordem crescente e limita o resultado em 20 iniciando pelo primeiro item
SELECT * FROM products
ORDER BY price ASC
LIMIT 20;

-- OFFSET 2;

-- Get All Products versão 2 - seleção de um intervalo de preços, por exemplo entre 100.00 e 300.00 e retorna os produtos com preços dentro do intervalo definido em ordem crescente
SELECT * FROM products
WHERE price >= 100.00
AND price <= 300.00
ORDER BY price ASC;