export type Tcliente={
    id: string,
    email:string,
    password:string
};

export type Tproduto ={
    id:string,
    name:string,
    price:number,
    category:string
};

export type Tcompra={
    userId:string,
    productId:string,
    quantity:number,
    totalPrice:number
};