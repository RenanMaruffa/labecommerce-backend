-- Active: 1680778890571@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    createdAt TEXT DEFAULT(DATETIME('now', 'localtime'))
);

SELECT * FROM users;

DROP TABLE users;

INSERT INTO users VALUES
("U001", "Renan", "cliente1@laala.com", "123456", (DATETIME('now', 'localtime'))),
("U002", "Nathalia", "cliente2@laala.com", "6789", (DATETIME('now', 'localtime'))),
("U003", "Gabriel", "cliente3@laala.com", "9012", (DATETIME('now', 'localtime')));

CREATE TABLE products (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    imageUrl TEXT NOT NULL
);

DROP TABLE products;

SELECT * FROM products;

INSERT INTO products VALUES 
    ("P001", "Memoria Ram", 125.000, "ELECTRONICS", "Memorias GSkil DDR4", "https://adrenaline.com.br/uploads/2021/10/29/71792/g_skill-trident-z5-ddr5-6800-mhz(2).jpg"),
    ("P002", "Placa Mãe", 95.000, "ELECTRONICS", "Placa Asus Rampage Extreme", "https://adrenaline.com.br/uploads/chamadas/asus_rampage_iv_extreme_item.jpg"),
    ("P003", "Tenis", 15.000, "CLOTHES_AND_SHOES", "Tenis Puma", "https://www.espacocon.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/y/by3ua8b87fzkswrpurmeam54pgarwvbqwa4y_450x600_fill_ffffff_1.jpg"),
    ("P004", "Pulseira", 5.000, "ACCESSORIES", "Pulseira Titanio Pavanini", "https://pavanini.com/wp-content/uploads/2022/05/alcantraescovado-1-768x512.png"),
    ("P005", "Moleton", 15.000, "CLOTHES_AND_SHOES", "Moleton Nike", "https://images.tcdn.com.br/img/img_prod/690339/moletom_nike_sb_icon_hoodie_khaki_10705_1_781359d38ba2a0875a5dc84a3dafdf16.jpg");


-- Get All Users - retorna todos os usuários cadastrados
SELECT * FROM users;

-- Get All Products - retorna todos os produtos cadastrados
SELECT * FROM products;

-- Search Product by name - crie um termo de busca, por exemplo "monitor" e retorna o resultado baseado no termo de busca
SELECT * FROM products
WHERE name LIKE "Pl%";

-- Create User - crie um novo usuário e insere o item mockado na tabela users
INSERT INTO users VALUES
("U004", "Antonio", "cliente4@laala.com", "9090", (DATETIME()));

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

CREATE TABLE purchases (
    id TEXT UNIQUE PRIMARY KEY NOT NULL,
    buyer TEXT NOT NULL,
    total_price REAL NOT NULL,
    createdAt TEXT NOT NULL DEFAULT(DATETIME('now', 'localtime')),
    paid INTEGER NOT NULL DEFAULT(0),
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users (id)
);

-- A coluna paid será utilizada para guardar uma lógica booleana. O SQLite recomenda o uso do número 0 para false e 1 para true
-- Os pedidos começam com paid valendo 0 (você irá definir isso quando for popular a tabela com o INSERT).
-- A coluna delivered_at será utilizada para gerenciar a data de entrega do pedido. Ela é opcional, porque sempre começará sem valor ao criar um pedido, ou seja, null.
-- O SQLite recomenda utilizar TEXT para lidar com strings no formato ISO8601 "aaaa-mm-dd hh:mm:sss". Lembre-se da existência da função nativa DATETIME para gerar datas nesse formato.

SELECT * FROM purchases;

DROP TABLE purchases;

INSERT INTO purchases VALUES
("PC001", "Renan", 250.000, (DATETIME('now', 'localtime')), 0, "U001"),
("PC002", "Renan", 95.000, (DATETIME('now', 'localtime')), 0, "U001"),
("PC003", "Nathalia", 15.000, (DATETIME('now', 'localtime')), 0, "U002"),
("PC004", "Nathalia", 15.000, (DATETIME('now', 'localtime')), 0, "U002"),
("PC005", "Gabriel", 5.000, (DATETIME('now', 'localtime')), 0, "U003"),
("PC006", "Gabriel", 125.000, (DATETIME('now', 'localtime')), 0, "U003");

UPDATE purchases SET
delivered_at = (DATETIME('now', 'localtime'))
WHERE id = "PC001";

SELECT * FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id
WHERE users.id = "U002";

CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

SELECT * FROM purchases_products;

DROP TABLE purchases_products;

INSERT INTO purchases_products VALUES 
("PC001", "P001", 2),
("PC002", "P002", 1),
("PC003", "P005", 1),
("PC004", "P003", 1),
("PC005", "P004", 1),
("PC006", "P001", 1);

-- ON FOREIGN KEY = PRIMARY KEY

SELECT * FROM purchases_products
INNER JOIN products ON purchases_products.product_id = products.id
INNER JOIN purchases ON purchases_products.purchase_id = purchases.id
INNER JOIN users ON purchases.buyer_id = users.id;