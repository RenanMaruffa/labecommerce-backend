import { addProduct, createPurchase, getAllProducts, getAllPurchasesFromUserId, getAllUsers, getProductById, products, purchase, queryProductsByName, user } from "./database";
import { Categorias } from "./types";


console.log("Usuarios------->", user);
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Produtos-------->", products);
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Compras---------->", purchase);
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Lista dos Usuarios");
getAllUsers()
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Adicionar Produtos");
addProduct("p005", "Bolsa", 85.000, Categorias.ACCESSORIES)
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Lista TODOS os Produtos");
getAllProducts()
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Pegar por ID");
getProductById("p004")
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Pegar por nome");
console.table(queryProductsByName("Pl"))
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Comprar");
console.table(createPurchase("u002", "p001", 25, 50))
console.table(createPurchase("u001", "p002", 25, 50))
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Lista compra por user");
console.table(getAllPurchasesFromUserId("u002"))
console.table(getAllPurchasesFromUserId("u001"))
console.log("----------------------------------------------------------------------------------------------------------------------------------");