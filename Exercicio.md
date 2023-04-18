# Exercício 3
Nosso objetivo agora é **documentar** a API criada.

a) Crie e publique uma coleção de requisições no Postman. Use os exemplos do material assíncrono como referência.

b) Além disso, você deve criar um README.md para seu repositório, explicando a API Labecommerce. Nesse README, inclua o link para a coleção de requisições do passo **a**.
-----------------------------------------------------


# Exercício 1
Agora que sabemos como criar relações m:n, é possível implementar a tabela de relações entre produtos e pedidos.<br>

## Criação da tabela de relações
- nome da tabela: **purchases_products**
- colunas da tabela:
  - purchase_id (TEXT e obrigatório, não deve ser único)
  - product_id (TEXT e obrigatório, não deve ser único)
  - quantity (INTEGER e obrigatório, não deve ser único)

### Como essa lógica funciona?
Cada compra é registrada uma única vez na tabela purchases. <br>
Cada produto da mesma compra é registrado uma única vez na tabela purchases_products. <br><br>
Exemplo: <br>
Uma pessoa coloca 5 laranjas (p001) e 3 bananas (p002) no carrinho e confirma sua compra.

- a compra é registrada com id c001 na tabela **purchases**
- a seguir, cada item do carrinho é registrado na tabela **purchases_products**
  - 5 laranjas são registradas na tabela purchases_products (c001, p001, 5)
  - 3 bananas são registradas na tabela purchases_products (c001, p002, 3)

  Exercício 2
Com a tabela de relações criada podemos finalmente realizar compras no banco de dados!

Inserção dos dados
Popule sua tabela purchases_products simulando 3 compras de clientes.

Consulta com junção INNER JOIN
Mostre em uma query todas as colunas das tabelas relacionadas (purchases_products, purchases e products).

Exercício 3
Conforme evoluímos no conhecimento em SQL e SQLite, e também no contexto do negócio (e-commerce), percebemos algumas falhas ao longo do processo. Utilize esse tempo para refatorar sua modelagem.

Lembre-se que o recomendado no SQLite acerca de edição de tabelas é a recriação do zero.
Ainda bem que você não deletou suas queries antigas, não é mesmo?

A vantagem em estarmos utilizando o SQLite é que você não precisa deletar todo o trabalho já feito, basta criar um novo arquivo .db e começar de novo por ele.

Diagrama
É comum desenvolver diagramas para representar a modelagem do banco de dados, definindo visualmente todas as tabelas, colunas e relações para facilitar a leitura e entendimento do projeto.

Olha só um exemplo de modelagem visual do Labecommerce!

image

Você pode conferir como ele foi montado acessando o link: https://dbdiagram.io/d/63c6e8e5296d97641d7a4666

Desenvolver esse tipo de documentação é um passo mais avançado nos conhecimentos de banco de dados, então não se preocupe nesse momento!

