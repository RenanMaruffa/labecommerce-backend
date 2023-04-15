# Exercício 3
Nosso objetivo agora é **documentar** a API criada.

a) Crie e publique uma coleção de requisições no Postman. Use os exemplos do material assíncrono como referência.

b) Além disso, você deve criar um README.md para seu repositório, explicando a API Labecommerce. Nesse README, inclua o link para a coleção de requisições do passo **a**.
-----------------------------------------------------


Exercício 1
Agora que sabemos como implementar relações do tipo 1:m e 1:1, vamos refatorar a estrutura do Labecommerce!
Por ora não precisaremos editar as tabelas já existentes (users e products). Nosso objetivo hoje é criar a tabela de pedidos (purchases).
Na próxima aula veremos como criar a lógica para adicionar produtos em uma ordem de pedido.

Criação da tabela de pedidos

nome da tabela: purchases

colunas da tabela:
id (TEXT, PK, único e obrigatório)
total_price (REAL e obrigatório)
paid (INTEGER e obrigatório)
created_at (TEXT e opcional)
buyer_id (TEXT, obrigatório e FK = referencia a coluna id da tabela users)

Observações
A coluna paid será utilizada para guardar uma lógica booleana. O SQLite recomenda o uso do número 0 para false e 1 para true.

Os pedidos começam com paid valendo 0 (você irá definir isso quando for popular a tabela com o INSERT).

A coluna delivered_at será utilizada para gerenciar a data de entrega do pedido. Ela é opcional, porque sempre começará sem valor ao criar um pedido, ou seja, null.

O SQLite recomenda utilizar TEXT para lidar com strings no formato ISO8601 "aaaa-mm-dd hh:mm:sss". Lembre-se da existência da função nativa DATETIME para gerar datas nesse formato.

Exercício 2
Popule sua tabela de pedidos, criada no exercício anterior.
Por enquanto não se preocupe em adicionar produtos ao pedido, veremos isso na aula que vem.
Com isso em mente, crie um valor aleatório para o preço total do pedido.

a) Crie dois pedidos para cada usuário cadastrado
No mínimo 4 no total (ou seja, pelo menos 2 usuários diferentes) e devem iniciar com a data de entrega nula.

b) Edite o status da data de entrega de um pedido
Simule que o pedido foi entregue no exato momento da sua edição (ou seja, data atual).

# Exercício 3
Crie a query de consulta utilizando junção para simular um endpoint de histórico de compras de um determinado usuário.

Mocke um valor para a id do comprador, ela deve ser uma das que foram utilizadas no exercício 2.