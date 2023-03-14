export enum Categorias {
    ACCESSORIES = "Acessórios",
    CLOTHES_AND_SHOES = "Roupas e calçados",
    ELECTRONICS = "Eletrônicos"
}

export type Tcliente={
    id: string,
    email:string,
    password:string
};

export type Tproduto ={
    id:string,
    name:string,
    price:number,
    category:Categorias
};

export type Tcompra={
    userId:string,
    productId:string,
    quantity:number,
    totalPrice:number
};