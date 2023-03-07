import { Tcliente, Tcompra, Tproduto } from "./types";


export const user: Tcliente[] = [
    {
        id: "001",
        email: "cliente1@laala.com",
        password: "123456"
    },

    {
        id: "002",
        email: "cliente2@laala.com",
        password: "123456"

    }
];

export const products: Tproduto[] = [
    {
        id: "p001",
        name: "Memoria Ram",
        price: 25.000,
        category: "Hardware"
    },

    {
        id: "p002",
        name: "Placa Mãe",
        price: 95.000,
        category: "Hardware"
    }
];

export const purchase: Tcompra[] = [
    {
        userId: "001",
        productId: "p001",
        quantity: 1,
        totalPrice: 50.000
    }
];