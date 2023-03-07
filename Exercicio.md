
# Exercício 1
O typescript é uma lib que deve ser instalada nas dependências de desenvolvimento da aplicação (somente nós, devs, precisamos dela e por isso não disponibilizamos na versão de produção, que é para clientes).
- adicione o typescript no package.json como devDependencies
- aproveite e adicione também a tipagem do node (@types/node) como devDependencies
    - é necessário porque estamos usando typescript no node e o node não tem suas tipagens incluídas no pacote base

## Crie o arquivo de configuração do typescript (tsconfig.json)
- lembre-se de referenciar o material assíncrono para copiar as configurações corretas

## Refatore o package.json
- remova a linha "type": "module", pois o typescript já utiliza módulos automaticamente e repeti-la aqui dá problemas de execução

## Limpe a pasta
- delete os arquivos feitos ontem (index.js, par-ou-impar.js e pedra-papel-tesoura.js)
    - não se preocupe, os códigos estão salvos na branch de ontem (node-package-json) e podem ser referenciados se necessário

## Crie o index.ts
- lembre-se de criá-lo dentro de uma pasta chamada src
- coloque um console.log só para verificar se tudo funcionou
- edite o script de start para executar a transpilação e rodar o javascript da pasta build (que é criada na transpilação)
    - lembre-se de referenciar o material assíncrono para saber como configurar o script de start para o typescript
- rode o script de start e veja se seu console.log apareceu

# Exercício 2
Agora que temos uma aplicação typescript configurada, podemos criar tipagens para nossos dados.
No projeto Labecommerce temos 3 entidades:

## user
É a pessoa cliente cadastrada.
  - id (string)
  - email (string)
  - password (string)

## product
É o produto cadastrado.
  - id (string)
  - name (string)
  - price (number)
  - category (string)
  
## purchase
É a compra realizada por cliente.
  - userId (string)
  - productId (string)
  - quantity (number)
  - totalPrice (number)

## Crie tipagens para cada uma das entidades acima
- lembre-se de referenciar o material assíncrono
- crie um arquivo dentro da pasta src chamado de types.ts
- coloque o código das tipagens dentro do types.ts e exporte-as

exemplo:
```
// estamos dentro do arquivo src/types.ts tipando um vídeo do youtube
export type TVideo = {
  id: string,
  channelId: string,
  title: string,
  description: string,
  durationInSeconds: number,
  views: number
}

# Exercício 3
Com as tipagens desenvolvidas, agora podemos criar alguns dados mock (de mentirinha, mas verdadeiramente estruturados).
- crie o arquivo database.ts dentro da pasta src
    - iremos criar um array para cada entidade e exportá-los

## user
- no database.ts, crie e exporte a constante users e tipe-a como um array do type respectivo criado no exercício 2
    - lembre-se de referenciar o material assíncrono
- crie pelo menos 2 objetos nesse array

## product
- no database.ts, crie e exporte a constante products e tipe-a como um array do type respectivo criado no exercício 2
    - lembre-se de referenciar o material assíncrono
- crie pelo menos 2 objetos nesse array

## purchase
- no database.ts, crie e exporte a constante purchases e tipe-a como um array do type respectivo criado no exercício 2
    - lembre-se de referenciar o material assíncrono
- crie pelo menos 2 objetos nesse array
    - garanta que o userId preenchido exista na constante users
    - garanta que o productId preenchido exista na constante products
    - garanta que o cálculo do totalPrice esteja de acordo com a quantity da compra

# Para finalizar
Vá para o index.ts e importe as constantes users, products e purchases.
Coloque um console.log para cada e rode a aplicação com o script de start para ver se deu tudo certo!