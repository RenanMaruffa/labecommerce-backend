import { addProduct, createPurchase, getAllProducts, getAllPurchasesFromUserId, getAllUsers, getProductById, products, purchase, queryProductsByName, user } from "./database";
import { Categorias, Tcliente, Tcompra, Tproduto } from "./types";
import express, { Request, Response } from 'express'
import cors from 'cors';

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


//Endpoint Ping Pong
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
});

//Endpoint getAllUsers

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(user)
});

//Endpoint  getAllProducts

app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products)
});

//Endpoint searchProductByName

app.get("/products/search", (req: Request, res: Response) => {
    const q = req.query.q as string
    const result = q ?
        products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()))
        :
        products
    res.status(200).send(result)
});

//Endpoint createUser

app.post("/users", (req: Request, res: Response) => {
    const id: string = req.body.id
    const email: string = req.body.email
    const password: string = req.body.password

    const newUser: Tcliente = {
        id,
        email,
        password
    }

    user.push(newUser)
    console.log("Usuarios", user);
    res.status(201).send("Usuario Criado!")

});

//Endpoint createProduct

app.post("/products", (req: Request, res: Response) => {
    const id: string = req.body.id
    const name: string = req.body.name
    const price: number = req.body.price
    const category: Categorias = req.body.category

    const newProduct: Tproduto = {
        id,
        name,
        price,
        category
    }

    products.push(newProduct)
    console.log("Produtos", products);
    res.status(201).send("Produto Criado")
});

//Endpoint getProductsById

app.get("/products/:id", (req: Request, res: Response) => {
    const id: string = req.params.id;
    const result: Tproduto = products.find((item) => item.id === id)

    res.status(200).send(result)
});

//Endpoint getUserPurchasesByUserId

app.get("/users/:id/purchases", (req: Request, res: Response) => {
    const userId: string = req.params.id
    const result: Tcompra = purchase.find((item) => item.userId === userId)
    console.log(userId);
    
    res.status(200).send(result)
});

//Endpoint deleteUserById

app.delete("/user/:id", (req: Request, res: Response) => {
    const id: string = req.params.id
    const index: number = user.findIndex((item) => item.id === id)

    let message: string
    if (index > 0) {
        user.splice(index, 1)
        message = "User deletado com sucesso!"
    } else {
        message = "Nenhum usuario encontrado!"
    }
    console.log(user);
    res.status(200).send(message)
});

// Endpoint deleteProductById

//findIndex retorna apenas o valor do index ao contrario do find que retorna um {} inteiro
// splice remove numeros especificos de um []

app.delete("/product/:id", (req: Request, res: Response)=>{
    const id: string = req.params.id
    const index: number = products.findIndex((item)=> item.id === id)

    let message: string
    if (index > 0) {
        products.splice(index, 1)
        message = "Produto deletado com sucesso!"
    } else {
        message = "Produto não encontrado"
    }
    console.log(products);
    res.status(200).send(message)
});

//Endpoint editUserById

app.put("/users/:id", (req: Request, res: Response)=>{
    const id: string = req.params.id
    const newEmail: string = req.body.newEmail
    const newPassword: string = req.body.newPassword

    const findUser = user.find((item) => item.id === id)

    console.log(findUser);
    

    findUser.email = newEmail || findUser.email
    findUser.password = newPassword || findUser.password

    console.log(findUser);
    
    res.status(200).send("Cadastro atualizado com sucesso")
})

//Endpoint editProductById

app.put("/products/:id", (req: Request, res: Response)=>{
    const id: string = req.params.id
    const newName: string = req.body.newName
    const newPrice: number = req.body.newPrice
    const newCategory: Categorias = req.body.newCategory

    const findProduct = products.find((item)=> item.id === id)

    console.log(findProduct);

    findProduct.name = newName || findProduct.name
    findProduct.price = newPrice || findProduct.price
    findProduct.category = newCategory || findProduct.category

    console.log(findProduct);
    res.status(200).send("Produto atualizado com sucesso")
})
