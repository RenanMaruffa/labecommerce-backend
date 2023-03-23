import { Tcliente, Tcompra, Tproduto, Categorias } from "./types";

export const user: Tcliente[] = [
    {
        id: "u001",
        email: "cliente1@laala.com",
        password: "123456"
    },

    {
        id: "u002",
        email: "cliente2@laala.com",
        password: "1234567"

    },
    {
        id: "u003",
        email: "cliente3@laala.com",
        password: "12345678"

    }
];

export const products: Tproduto[] = [
    {
        id: "p001",
        name: "Memoria Ram",
        price: 25.000,
        category: Categorias.ELECTRONICS
    },
    {
        id: "p002",
        name: "Placa Mãe",
        price: 95.000,
        category: Categorias.ELECTRONICS
    },
    {
        id: "p003",
        name: "Tenis",
        price: 15.000,
        category: Categorias.CLOTHES_AND_SHOES
    },
    {
        id: "p004",
        name: "Pulseira",
        price: 5.000,
        category: Categorias.ACCESSORIES
    },
];

export const purchase: Tcompra[] = [
    {
        userId: "u001",
        productId: "p001",
        quantity: 2,
        totalPrice: 50.000
    },
    {
        userId: "u002",
        productId: "p002",
        quantity: 1,
        totalPrice: 95.000
    },
    {
        userId: "u003",
        productId: "p004",
        quantity: 2,
        totalPrice: 10.000
    }
];



function createUser(id: string, email: string, password: string) {
    const newUser: Tcliente = { id, email, password }
    user.push(newUser)
    console.log("Cadastro de usuario realizado com sucesso!");
};

createUser("u004", "renan@lala.com", "goku")

export function getAllUsers() {
    console.log(user);
};

export function addProduct(id: string, name: string, price: number, category: Categorias) {
    const newProduct: Tproduto = { id, name, price, category }
    products.push(newProduct)
    console.log("Cadastro de produto realizado com sucesso!");
};

export function getAllProducts(): void {
    console.log(products);
};

export function getProductById(id: string) {
    products.find((produtoId) => {
        if (produtoId.id === id) {
            return console.log(produtoId)
        }
    })
};

// export function queryProductsByName(name:string) {
//     products.find((produtoName) => {
//         if (produtoName.name == name) {
//             return console.log(produtoName)
//         }
//     })      
// }

export function queryProductsByName(q: string): Tproduto[] {
    return products.filter((prod) => prod.name.toLowerCase().includes(q.toLowerCase()))
};


// export const queryProductsByName = (q:string) => {
//     return products.filter(prod => prod.name.toLowerCase() === q.toLowerCase())
// };

//quando precisa buscar algo de forma simples, especifica, sem logica, direta, sem transformas a pesquisa em um objeto, pode fazer dessa forma acima
// como é case sensitive, precisa do toLowerCase(   )
// como ta usando FILTER (metodo usado em ARRAY) tem q colocar um array na saida 

export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number): string {
    purchase.push({ userId, productId, quantity, totalPrice })
    return "Compra Realizada com sucesso!"
};

// export const createPurchase = (userId: string, productId: string, quantity: number, totalPrice: number) : string => {
//     const newPurchase = {userId, productId, quantity, totalPrice}
//     purchase.push(newPurchase)
//     return "Compra realizada com sucesso!"
// }

// Podemos usaer console.log ou Return - se usar Return, tipar a saida da função
// Se usar Return, precisa chamar no index como console.log
// Se usar console.log, pode chamar a função direto


export function getAllPurchasesFromUserId(userIdToSearch: string): Tcompra[] {
    return purchase.filter(purchase => purchase.userId === userIdToSearch)
};

// export const getAllPurchasesFromUserId = (userIdToSearch: string) =>{
//     return purchase.filter(user => user.userId === userIdToSearch)
// }


// como ta usando FILTER (metodo usado em ARRAY) tem q colocar um array na saida 
