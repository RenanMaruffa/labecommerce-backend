import { products, purchase, user } from "./database";
import { Categorias, Tcliente, Tcompra, Tproduto } from "./types";
import express, { Request, Response } from 'express'
import cors from 'cors';
import { db } from "./database/knex";



const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
});


// console.log("Usuarios------->", user);
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Produtos-------->", products);
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Compras---------->", purchase);
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Lista dos Usuarios");
// getAllUsers()
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Adicionar Produtos");
// addProduct("p005", "Bolsa", 85.000, Categorias.ACCESSORIES)
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Lista TODOS os Produtos");
// getAllProducts()
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Pegar por ID");
// getProductById("p004")
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Pegar por nome");
// console.table(queryProductsByName("Pl"))
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Comprar");
// console.table(createPurchase("u002", "p001", 25, 50))
// console.table(createPurchase("u001", "p002", 25, 50))
// console.log("----------------------------------------------------------------------------------------------------------------------------------");
// console.log("Lista compra por user");
// console.table(getAllPurchasesFromUserId("u002"))
// console.table(getAllPurchasesFromUserId("u001"))
// console.log("----------------------------------------------------------------------------------------------------------------------------------");


//Endpoint Ping Pong - Validado!
app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" });
    } catch (error) {
        console.log(error);

        if (req.statusCode === 200) {
            res.status(500)
        };

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        };
    };
})

//Endpoint getAllUsers - Validado! KNEX OK!

app.get("/users", async (req: Request, res: Response) => {

    try {
        //KNEX
        const result = await db("users");

        res.status(200).send(result);

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send("Erro inesperado");
    };
});

//Endpoint createUser - Validado! KNEX OK!

app.post("/users", async (req: Request, res: Response) => {
    try {

        const { name, email, password } = req.body;

        const id = Math.floor(Date.now() * Math.random()).toString(36);

        if (!name || !email || !password) {
            res.status(400)
            throw new Error("Preencha todas a informações para cadastro do novo usuário ('name' 'email' e 'password').")
        };

        if (name !== undefined) {
            if (typeof name !== "string") {
                res.status(400);
                throw new Error("O 'name' do usuário deve ser do tipo 'string'.");
            };
        };

        if (email !== undefined) {
            if (typeof email !== "string") {
                res.status(400);
                throw new Error("O 'email' do usuário deve ser do tipo 'string'.");
            };
        };

        if (password !== undefined) {
            if (typeof password !== "string") {
                res.status(400);
                throw new Error("O 'password' do usuário deve ser do tipo 'string'.");
            };
        };

        const searchEmail = email.match("@")
        if (searchEmail !== undefined) {
            if (!searchEmail) {
                res.status(400);
                throw new Error("O 'email' não possui um formato válido.");
            };
        };

        //RAW
        // const [searchEmailClone] = await db.raw(`
        // SELECT * FROM users
        // WHERE email = ?
        // `, [email]);

        const [searchEmailClone] = await db("users").select("*").where({ email: email });

        if (searchEmailClone) {
            res.status(400);
            throw new Error("Já existe uma conta com este 'email'.");
        };

        //RAW
        // await db.raw(`
        // INSERT INTO users (id, name, email, password)
        // VALUES ("${id}", "${name}", "${email}", "${password}") 
        // `)

        //KNEX MODO 1
        // await db.insert({
        //     id:id,
        //     name:name,
        //     email:email,
        //     password:password
        // }).into ("users")

        //KNEX MODO 2
        const newUser = {
            id: id,
            name: name,
            email: email,
            password: password
        };

        await db("users").insert(newUser);


        res.status(201).send("Usuário cadastrado com sucesso!");

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

//Endpoint createProduct - Validado! KNEX OK!

app.post("/products", async (req: Request, res: Response) => {

    try {
        const { name, price, category, description, imageUrl } = req.body;

        const id = Math.floor(Date.now() * Math.random()).toString(36);

        if (!name || !price || !category || !description || !imageUrl) {
            res.status(400)
            throw new Error("Preencha todas a informações para cadastro do novo produto ('name', 'price', 'category', 'description' e 'imageUrl'")
        };

        if (name !== undefined) {
            if (typeof name !== "string") {
                res.status(400);
                throw new Error("O 'name' do produto deve ser do tipo 'string'.");
            };
        };

        if (price !== undefined) {
            if (typeof price !== "number") {
                res.status(400);
                throw new Error("O 'price' do produto deve ser do tipo 'number'.");
            };
        };

        if (category !== undefined) {
            if (
                category !== Categorias.ACCESSORIES &&
                category !== Categorias.CLOTHES_AND_SHOES &&
                category !== Categorias.ELECTRONICS) {
                res.status(400);
                throw new Error("O campo 'category' deve conter um tipo válido: 'ACCESSORIES', 'CLOTHES_AND_SHOES' ou 'ELECTRONICS'.");
            };
        };

        //RAW
        // await db.raw(`
        // INSERT INTO products (id, name, price, category, description, imageUrl)
        // VALUES ("${id}", "${name}", ${price}, "${category}", "${description}", "${imageUrl}") 
        // `)

        //KNEX MODO 2
        const newProduct = {
            id: id,
            name: name,
            price: price,
            category: category,
            description: description,
            imageUrl: imageUrl
        };

        await db("products").insert(newProduct);

        res.status(201).send("Produto cadastrado com sucesso!");

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

//Endpoint  getAllProducts - Validado! KNEX OK! - Get all products funcionalidade 1

app.get("/products", async (req: Request, res: Response) => {

    try {
        const result = await db("products");

        res.status(200).send(result);

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send("Erro inesperado");
    };
});

//Endpoint searchProductByName - Validado! KNEX OK! - Get all products funcionalidade 2

app.get("/products/search", async (req: Request, res: Response) => {
    try {
        const q = req.query.q;

        if (!q) {
            res.status(400)
            throw new Error("Preencha algo para ser realizar a busca")
        };

        if (typeof q !== "string") {
            res.status(400)
            throw new Error("Sua busca deve ser em formato de texto")
        };

        // RAW
        //     const result = await db.raw(`
        //     SELECT * FROM products
        //     WHERE name LIKE "%${q}%";
        // `)

        //KNEX
        const result = await db("products").where("name", "LIKE", `%${q}%`);

        if (!result.length) {
            res.status(400)
            throw new Error("Caractere não encontrado. Sua busca deve ser em formato de texto")
        };

        res.status(200).send(result)

    } catch (error: any) {

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

//Endpoint getProductsById - Validado! KNEX OK!

app.get("/products/:id", async (req: Request, res: Response) => {

    try {
        const idToSearch: string = req.params.id;
        const [searchProduct] = await db("products").where({ id: idToSearch });

        if (!searchProduct) {
            res.status(400)
            throw new Error("Preencha algo para ser realizar a busca")
        };

        if (!idToSearch) {
            res.status(400)
            throw new Error("Este 'id' não existe")
        };

        res.status(200).send(searchProduct);

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

//Endpoint editProductById - Validado! KNEX OK!

app.put("/products/:id", async (req: Request, res: Response) => {

    try {

        const id = req.params.id;

        const { newName, newPrice, newCategory, newDescription, newImageUrl } = req.body;

        //RAW
        // const [findProduct] = await db.raw(`
        // SELECT * FROM products
        // WHERE id = '${id}'
        // `);

        //KNEX MODO 1
        // const [findProduct] = await db.select("*").from("products").where({ id: id })

        ////KNEX MODO 2
        const [findProduct] = await db("products").where({ id: id });

        if (!findProduct) {
            res.status(400)
            throw new Error("Produto não encontrado, Verifique o 'id'.")
        };

        // if (newName === undefined || newPrice === undefined || newCategory === undefined || newDescription === undefined || newImageUrl === undefined) {
        //     res.status(400);
        //     throw new Error("Dados inválidos. Pelo menos um valor deve ser fornecido para atualizar o produto.");
        // };

        if (!newName && !newPrice && !newCategory && !newDescription && !newImageUrl) {
            res.status(400);
            throw new Error("Preencha o campo para atualizar o produto.");
        };

        if (newName !== undefined && typeof newName !== "string") {
            res.status(400);
            throw new Error("O campo 'newName' deve ser uma string.");
        };

        if (newPrice !== undefined && typeof newPrice !== "number") {
            res.status(400);
            throw new Error("O campo 'newPrice' deve ser um número.");
        };

        if (newDescription !== undefined && typeof newDescription !== "string") {
            res.status(400);
            throw new Error("O campo 'newDescription' deve ser uma string.");
        };

        if (newImageUrl !== undefined && typeof newImageUrl !== "string") {
            res.status(400);
            throw new Error("O campo 'newImageUrl' deve ser uma string.");
        };

        if (newCategory !== undefined && ![Categorias.ACCESSORIES, Categorias.CLOTHES_AND_SHOES, Categorias.ELECTRONICS].includes(newCategory)) {
            res.status(400);
            throw new Error("O campo 'category' deve conter um valor válido: 'ACCESSORIES', 'CLOTHES_AND_SHOES' ou 'ELECTRONICS'.");
        };

        //RAW
        //     await db.raw(`
        //     UPDATE products
        //     SET
        //     name = '${newName || findProduct.name}',
        //     price =  ${newPrice || findProduct.price},
        //     category = '${newCategory || findProduct.category}',
        //     description = '${newDescription || findProduct.description}',
        //     imageUrl = '${newImageUrl || findProduct.imageUrl}'
        //     WHERE 
        //     id = '${id}';
        // `);

        await db("products").where({ id: id }).update({
            name: newName || findProduct.name,
            price: newPrice || findProduct.price,
            category: newCategory || findProduct.category,
            description: newDescription || findProduct.description,
            imageUrl: newImageUrl || findProduct.imageUrl
        });

        res.status(200).send("Produto atualizado com sucesso")

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

//Endpoint createPurchase - Validado! KNEX OK!

app.post("/purchases", async (req: Request, res: Response) => {
    try {

        const purchase_id = Math.floor(Date.now() * Math.random()).toString(36);

        const { buyer, buyer_id, total_price, productId, quantity } = req.body;

        if (buyer === null || buyer === undefined || buyer_id === null || buyer_id === undefined || total_price === null || total_price === undefined || productId === null || productId === undefined || quantity === null || quantity === undefined) {
            return res.sendStatus(400).send("Preencha todos os campos para criar a compra.");
        }

        // const [findId] = await db("purchases").where({ id: id });

        // if (findId && findId.length > 0) {
        //     res.status(400);
        //     throw new Error("O 'id' já existe. Insira um novo 'id'.");
        // };

        const [findBuyer] = await db("users").where({ id: buyer_id });

        if (!findBuyer || findBuyer.length === 0) {
            res.status(400)
            throw new Error("O 'buyer' deve corresponder à um 'id' de um usuário cadastrado.");
        };

        if (!total_price) {
            res.status(400);
            throw new Error("Total do produto inexistente, por favor digite um total válido.")
        };

        if (typeof total_price !== "number") {
            res.status(400);
            throw new Error("o total do produto tem que ser um número.")
        };

        await db("purchases").insert({ id: purchase_id, buyer: buyer, buyer_id: buyer_id, total_price: total_price });

        await db("purchases_products").insert({ purchase_id: purchase_id, product_id: productId, quantity: quantity });

        res.status(201).send("Compra realizada com sucesso!");

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

// Endpoint deletePurchaseById - Validado! KNEX OK!

app.delete("/purchases/:id", async (req: Request, res: Response) => {

    try {
        const idToDelete = req.params.id;
        const [searchProduct] = await db("purchases").where({ id: idToDelete });

        if (searchProduct) {
            await db.delete().from("purchases_products").where({ purchase_id: idToDelete });
            await db.delete().from("purchases").where({ id: idToDelete });

        } else {
            res.status(404)
            throw new Error("Compra não encontrada ou já deletada anteriormente. Verifique o 'id'.")
        };

        res.status(200).send("Compra deletada com sucesso");

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

//Endpoint getUserPurchaseById - Validado! KNEX OK!

app.get("/users/:id/purchases", async (req: Request, res: Response) => {

    try {
        const idToSearch: string = req.params.id;
        const [searchPurchases] = await db("purchases").where({ id: idToSearch });

        if (searchPurchases) {
                const products = await db("purchases_products")
                .select(
                    "products.id AS productId",
                    "products.name AS productName",
                    "products.price AS productPrice",
                    "products.description AS productDescription",
                    "products.imageUrl AS imageUrl",
                    "purchases_products.quantity AS quantity"
                )
                .join(
                    "purchases",
                    "purchases_products.purchase_id",
                    "=",
                    "purchases.id"
                )
                .join(
                    "products",
                    "purchases_products.product_id",
                    "=",
                    "products.id"
                ).where("purchases.buyer_id", "=", `${searchPurchases.buyer_id}`)

                console.log(products)

            res.status(200).send({ ...searchPurchases, products })

        } else {
            res.status(400)
            throw new Error("'id' incorreto. Insira um 'id' de compra, iniciado com 'PC' seguido de 3 numeros, para realizar uma nova busca.")
        }

    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

// //Endpoint getUserPurchasesByUserId - Validado! KNEX OK!

// app.get("/users/:id/purchases", async (req: Request, res: Response) => {
//     try {
//         const id: string = req.params.id;
//         const [result] = await db("users").where({ buyer: id });
//         if (!result) {
//             res.status(400)
//             throw new Error("Este 'usuario' não existe")
//         };
//         if (!id) {
//             res.status(400)
//             throw new Error("Este 'id' não existe")
//         };

//         res.status(200).send(result)

//     } catch (error: any) {
//         console.log(error)

//         if (res.statusCode === 200) {
//             res.status(500)
//         };
//         res.send(error.message);
//     };
// });

//Endpoint deleteUserById - Validado! KNEX OK!

app.delete("/user/:id", async (req: Request, res: Response) => {

    try {
        const idToDelete: string = req.params.id;
        const [searchUserId] = await db("users").where({ id: idToDelete });

        if (searchUserId) {
            await db.delete().from("users").where({ id: idToDelete });

        } else {
            res.status(404)
            throw new Error("Usuario não encontrado ou já deletado anteriormente. Verifique o 'id'.")
        };

        res.status(200).send("Usuário apagado com sucesso");

    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

//findIndex retorna apenas o valor do index ao contrario do find que retorna um {} inteiro
//splice remove numeros especificos de um []

// Endpoint deleteProductById - Validado! KNEX OK!

app.delete("/products/:id", async (req: Request, res: Response) => {

    try {

        const idToDelete: string = req.params.id;
        const searchProduct = await db("products").where({ id: idToDelete });

        if (searchProduct) {
            await db.delete().from("purchases_products").where({ product_id: idToDelete })
            //precisa deletar da lista de comprados primeiro, pra depois remover da lista de produtos. Se não dá erro
            await db.delete().from("products").where({ id: idToDelete });

        } else {
            res.status(404)
            throw new Error("Produto não encontrado ou já deletado anteriormente. Verifique o 'id'.")
        };

        res.status(200).send("Produto apagado com sucesso");

    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

//findIndex retorna apenas o valor do index ao contrario do find que retorna um {} inteiro
//splice remove numeros especificos de um []

//Endpoint editUserById - Validado! KNEX OK!

app.put("/users/:id", async (req: Request, res: Response) => {

    try {

        const id = req.params.id
        const { newName, newEmail, newPassword } = req.body;

        const [findUser] = await db("users").where({ id: id });

        if (!findUser) {
            res.status(400)
            throw new Error("Usuário não encontrado. Verifique o 'id'.")
        };

        if (!newName && !newEmail && !newPassword) {
            res.status(400);
            throw new Error("Preencha pelo menos um campo para atualizar o usuário.");
        };

        if (!id) {
            res.status(400)
            throw new Error("ID não encontrado. Verifique o 'id'.")
        };

        // if (!newName) {
        //     res.status(400)
        //     throw new Error("Nome inexistente, por favor digite um Nome de usuário válido.")
        // }       

        if (newEmail !== undefined) {
            if (typeof newEmail !== "string") {
                res.status(400)
                throw new Error("O 'email' deve ser do tipo 'string'.")
            }
        };

        const searchEmail = newEmail ? newEmail.match("@") : null
        if (newEmail !== undefined && !searchEmail) {
            res.status(400);
            throw new Error("O 'email' não possui um formato válido.");
        };

        if (newPassword !== undefined && typeof newPassword !== "string") {
            res.status(400)
            throw new Error("O 'password' deve ser do tipo 'string'.")
        };

        await db("users").where({ id: id }).update({
            name: newName || findUser.name,
            email: newEmail || findUser.email,
            password: newPassword || findUser.password
        });

        res.status(200).send("Cadastro atualizado com sucesso")

    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

