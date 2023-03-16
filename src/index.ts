import { addProduct, createPurchase, getAllProducts, getAllPurchasesFromUserId, getAllUsers, getProductById, products, purchase, queryProductsByName, user } from "./database";
import { Categorias, Tcliente, Tproduto } from "./types";
import express, { Request, Response } from 'express'
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})


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
app.get("/ping", (req:Request, res:Response)=>{
    res.send("Pong!")
})

//Endpoint getAllUsers

app.get("/users",(req:Request, res:Response)=>{
    res.status(200).send(user)
})

//Endpoint  getAllProducts

app.get("/products", (req:Request, res:Response)=>{
    res.status(200).send(products)
})

//Endpoint searchProductByName

app.get("/products/search",(req:Request, res:Response)=>{
    const q = req.query.q as string
    const result = q?
    products.filter(product=>product.name.toLowerCase().includes(q.toLowerCase()))
    :
    products
    res.status(200).send(result)
})

//Endpoint createUser

app.post("/users", (req:Request, res:Response)=>{
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
    
})

//Endpoint createProduct

app.post("/products", (req:Request, res:Response)=>{
    const id: string = req.body.id
    const name: string = req.body.name
    const price: number = req.body.price
    const category: Categorias = req.body.category

const newProduct: Tproduto ={
    id,
    name,
    price,
    category
}

products.push(newProduct)
console.log("Produtos", products);
res.status(201).send("Produto Criado")
})