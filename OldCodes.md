Endpoint createUser - Validado!

    const [searchEmailClone] = await db.raw(`
             SELECT * FROM users
             WHERE email = "${email}"
         `)

         if (email !== undefined) {
             if (searchEmailClone) {
                 res.status(400)
                 throw new Error("Já existe uma conta com este 'email'.")
             };
         };

         Fico feliz em saber que o código corrigido funcionou perfeitamente para você. No entanto, ainda sugiro que você evite o uso de interpolação de string para evitar possíveis ataques de injeção de SQL. Usar placeholders é uma prática recomendada para proteger sua aplicação contra esses tipos de ataques.
        
         Dessa forma, o código corrigido com o uso de placeholders seria assim:
        
        const [searchEmailClone] = await db.raw(`
        SELECT * FROM users
        WHERE email = ?
        `, [email]);

        if (searchEmailClone) {
            res.status(400);
            throw new Error("Já existe uma conta com este 'email'.");
        }

          Note que o valor email é passado como um array no segundo argumento de db.raw(). Isso protege contra injeção de SQL e torna o código mais seguro.
        
         Além disso, a condição if (email !== undefined) não é necessária, pois email já foi definido anteriormente no código e só será definido se estiver presente no corpo da solicitação.

         app.post("/users", (req: Request, res: Response) => {

     try {
          const id: string = req.body.id
          const email: string = req.body.email
          const password: string = req.body.password

         const { id, email, password} = req.body;

         if (id.length < 4) {
             res.status(400)
             throw new Error("O 'id' do usuário deve conter, pelo menos, 4 caracteres.")
         };

         if (!id || !email || !password) {
             res.status(400)
             throw new Error("Preencha todas a informações para cadastro do novo usuário ('id' 'email' e 'password').")
         };

         if (id !== undefined) {
             if (typeof id !== "string") {
                 res.status(400);
                 throw new Error("O 'id' do usuário deve ser do tipo 'string'.");
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

         const searchId = user.find((user) => user.id === id);

         if (id !== undefined) {
             if (searchId) {
                 res.status(400)
                 throw new Error("Já existe uma conta com este 'id'.")
             };
         };

         const newUser: Tcliente = { id, email, password };

         user.push(newUser)
         console.log("Usuarios", user);
         res.status(201).send("Usuário cadastrado com sucesso!")

     } catch (error: any) {
         console.log(error)

         if (res.statusCode === 200) {
             res.status(500)
         }

         res.send(error.message);
     }
 });

Endpoint createProduct - Validado!

 app.post("/products", (req: Request, res: Response) => {

     try {
          const id: string = req.body.id
          const name: string = req.body.name
          const price: number = req.body.price
          const category: Categorias = req.body.category

         const { id, name, price, category }: Tproduto = req.body

         if (id.length < 4) {
             res.status(400)
             throw new Error("O 'id' do produto deve conter, pelo menos, 4 caracteres.")
         };

         if (id[0] !== "p") {
             res.status(400)
             throw new Error("O 'id' do produto deve iniciar com a letra 'p'.")
         };

         if (!id || !name || !price || !category) {
             res.status(400)
             throw new Error("Preencha todas a informações para cadastro do novo produto ('id' 'name', 'price', e 'category').")
         };

         if (id !== undefined) {
             if (typeof id !== "string") {
                 res.status(400);
                 throw new Error("O 'id' do produto deve ser do tipo 'string'.");
             };
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

         const searchId = products.find((product) => product.id === id);

         if (id !== undefined) {
             if (searchId) {
                 res.status(400)
                 throw new Error("Já existe um produto com este 'id'.")
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

         const newProduct: Tproduto = { id, name, price, category };

         products.push(newProduct)
         console.log("Produtos", products);
         res.status(201).send("Produto cadastrado com sucesso!")

     } catch (error: any) {
         console.log(error)

         if (res.statusCode === 200) {
             res.status(500)
         }

         res.send(error.message);
     }
 });

Endpoint searchProductByName - Validado!

 app.get("/products/search", (req: Request, res: Response) => {
     try {

         const q = req.query.q as string
          const result = q ?
              products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()))
              :
              products

         const result = products.filter((item) => item.name.toLowerCase().includes(q.toLowerCase())
         );

         if (q !== undefined) {
             if (q.length < 1) {
                 res.status(400)
                 throw new Error("O 'id' deve ter, pelo menos, 1 caractere.")
             }
         }

         res.status(200).send(result)

     } catch (error: any) {
         console.log(error)

         if (res.statusCode === 200) {
             res.status(500)
         }

         res.send(error.message);
     }
 });

Endpoint createPurchase - Validado!!

app.post("/purchases", (req: Request, res: Response) => {

    const { userId, productId, quantity, totalPrice }: Tcompra = req.body;

    try {

        if (!userId) {
            res.status(400);
            throw new Error("O 'userId' não foi informado.");
        };
        if (!productId) {
            res.status(400);
            throw new Error("O 'productId' não foi informado.");
        };
        if (!quantity) {
            res.status(400);
            throw new Error("O 'quantity' não foi informado.");
        };
        if (!totalPrice) {
            res.status(400);
            throw new Error("O 'totalPrice' não foi informado.");
        };

        const searchUserId = user.find((user) => user.id === userId)

        if (!searchUserId) {
            res.status(400)
            throw new Error("O 'userId' deve corresponder à 'id' de um usuário cadastrado.")
        };

        const searchProductId = products.find((products) => products.id === productId)

        if (!searchProductId) {
            res.status(400)
            throw new Error("O 'productId' deve corresponder à 'id' de um produto cadastrado.")
        };

        if (searchProductId) {
            if (searchProductId.price * quantity !== totalPrice) {
                res.status(400);
                throw new Error("O valor total da compra não corresponde ao valor do produto vezes a quantidade informada");
            };
        };

        const newPurchase: Tcompra = { userId, productId, quantity, totalPrice };

        purchase.push(newPurchase);
        res.status(201).send("Compra realizada com sucesso!");


    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});


//Endpoint editProductById - Validado!!

app.put("/products/:id", (req: Request, res: Response) => {

    try {

        const id: string = req.params.id
        const newName: string = req.body.newName
        const newPrice: number = req.body.newPrice
        const newCategory: Categorias = req.body.newCategory

        const findProduct = products.find((item) => item.id === id)

        if (!findProduct) {
            res.status(400)
            throw new Error("Produto não encontrado, Verifique o 'id'.")
        }

        if (newName !== undefined) {
            if (typeof newName !== "string") {
                res.status(400)
                throw new Error("O 'name' deve ser do tipo 'string'.")
            }
        }

        if (newPrice !== undefined) {
            if (typeof newPrice !== "number") {
                res.status(400)
                throw new Error("O 'price' deve ser do tipo 'number'.")
            }
        }

        if (newCategory !== undefined) {
            if (
                newCategory !== Categorias.ACCESSORIES &&
                newCategory !== Categorias.CLOTHES_AND_SHOES &&
                newCategory !== Categorias.ELECTRONICS) {
                res.status(400);
                throw new Error("O campo 'category' deve conter um tipo válido: 'ACCESSORIES', 'CLOTHES_AND_SHOES' ou 'ELECTRONICS'.");
            };
        };

        console.log(findProduct);

        findProduct.name = newName || findProduct.name
        findProduct.price = newPrice || findProduct.price
        findProduct.category = newCategory || findProduct.category

        console.log(findProduct);
        res.status(200).send("Produto atualizado com sucesso")

    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        res.send(error.message);
    };
});



        // if (!newName && !newPrice && !newCategory && !newDescription && !newImageUrl) {
        //     res.status(400);
        //     throw new Error("Dados inválidos. Pelo menos um valor deve ser fornecido para atualizar o produto.");
        // };

             // if (newCategory !== undefined) {
        //     if (
        //         newCategory !== Categorias.ACCESSORIES &&
        //         newCategory !== Categorias.CLOTHES_AND_SHOES &&
        //         newCategory !== Categorias.ELECTRONICS) {
        //         res.status(400);
        //         throw new Error("O campo 'category' deve conter um tipo válido: 'ACCESSORIES', 'CLOTHES_AND_SHOES' ou 'ELECTRONICS'.");
        //     };
        // };

        //Endpoint createPurchase - Validado!!

app.post("/purchases", async (req: Request, res: Response) => {

    const { userId, productId, quantity, totalPrice }: Tcompra = req.body;

    try {

        if (!userId) {
            res.status(400);
            throw new Error("O 'userId' não foi informado.");
        };
        if (!productId) {
            res.status(400);
            throw new Error("O 'productId' não foi informado.");
        };
        if (!quantity) {
            res.status(400);
            throw new Error("O 'quantity' não foi informado.");
        };
        if (!totalPrice) {
            res.status(400);
            throw new Error("O 'totalPrice' não foi informado.");
        };

        const searchUserId = user.find((user) => user.id === userId)

        if (!searchUserId) {
            res.status(400)
            throw new Error("O 'userId' deve corresponder à 'id' de um usuário cadastrado.")
        };

        const searchProductId = products.find((products) => products.id === productId)

        if (!searchProductId) {
            res.status(400)
            throw new Error("O 'productId' deve corresponder à 'id' de um produto cadastrado.")
        };

        if (searchProductId) {
            if (searchProductId.price * quantity !== totalPrice) {
                res.status(400);
                throw new Error("O valor total da compra não corresponde ao valor do produto vezes a quantidade informada");
            };
        };

        const newPurchase: Tcompra = { userId, productId, quantity, totalPrice };

        purchase.push(newPurchase);
        res.status(201).send("Compra realizada com sucesso!");


    } catch (error: any) {
        console.log(error);

        if (res.statusCode === 200) {
            res.status(500)
        };

        res.send(error.message);
    };
});

// Endpoint deletePurchaseById - Validado!!

app.delete("/products/:id", (req: Request, res: Response) => {

    try {

        const id = req.params.id
        const searchProduct = products.find((product) => product.id === id)

        if (!searchProduct) {
            res.status(400)
            throw new Error("Produto não encontrado. Verifique o 'id'.")
        }

        const index = products.findIndex((product) => product.id === id)
        if (index) {
            products.splice(index, 1);
        }

        res.status(200).send("Produto apagado com sucesso");

        // const index: number = products.findIndex((item) => item.id === id)

        // let message: string
        // if (index > 0) {
        //     products.splice(index, 1)
        //     message = "Produto deletado com sucesso!"
        // } else {
        //     message = "Produto não encontrado"
        // }
        // console.log(products);
        // res.status(200).send(message)

    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        res.send(error.message);
    };
});

//Endpoint getUserPurchasesByUserId - Validado!

app.get("/users/:id/purchases", (req: Request, res: Response) => {

    try {
        const id: string = req.params.id
        const result: Tcompra = purchase.find((item) => item.userId === id)
        console.log(id);

        if (!result) {
            res.status(400)
            throw new Error("Este 'usuario' não existe")
        }

        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        res.send(error.message);
    }
});