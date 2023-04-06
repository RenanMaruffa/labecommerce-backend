# Exercício 3
Nosso objetivo agora é **documentar** a API criada.

a) Crie e publique uma coleção de requisições no Postman. Use os exemplos do material assíncrono como referência.

b) Além disso, você deve criar um README.md para seu repositório, explicando a API Labecommerce. Nesse README, inclua o link para a coleção de requisições do passo **a**.


--------------------------------------------------------------------
# Exercício 1
Simularemos um planejamento de API. <br>
Ainda veremos como conectar o Express com o Banco de dados, então por enquanto desenvolva manualmente as queries que no futuro serão ativadas em cada endpoint.

# Exercício 3
Copie as queries do exercício 1 e refatore-as

## Get All Users
- retorna o resultado ordenado pela coluna email em ordem crescente

## Get All Products versão 1
- retorna o resultado ordenado pela coluna price em ordem crescente
- limite o resultado em 20 iniciando pelo primeiro item

## Get All Products versão 2
- seleção de um intervalo de preços, por exemplo entre 100.00 e 300.00
- retorna os produtos com preços dentro do intervalo definido em ordem crescente