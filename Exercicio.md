# Exercício 1
Configure seu servidor node com express para que ele inicie com o script de start.<br>
## A configuração deve ser desenvolvida no index.ts
- lembre-se de referenciar o material assíncrono

## Crie um endpoint de teste
- method = GET
- path = "/ping"
- response = "Pong!"
- execute o servidor e teste seu endpoint no Postman

# Exercício 2
Agora crie endpoints para automatizar a manipulação dos dados do arquivo database.ts.
Por enquanto não se preocupe em validar as entradas, foque no caso de sucesso (caminho feliz).

## Get All Users
- method HTTP (GET)
- path ("/users")
- response
    - status 200
    - array de users do database.ts

## Get All Products
- method HTTP (GET)
- path ("/products")
- response
    - status 200
    - array de products do database.ts

## Search Product by name
- method HTTP (GET)
- path ("/product/search")
- query params
    - q
- response
    - status 200
    - array do resultado da busca

# Exercício 3
Mesmo fluxo que o exercício 2.
Mesmo fluxo do exercício 2.

## Create User
- method HTTP (POST)
- path ("/users")
- body
    - id
    - email
    - password
- response
    - status 201
    - "Cadastro realizado com sucesso"
## Create Product
- method HTTP (POST)
- path ("/products")
- body
    - id
    - name
    - price
    - category
- response
    - status 201
    - "Produto cadastrado com sucesso"