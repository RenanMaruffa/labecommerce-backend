const usuario = process.argv[2].toLowerCase()

const possibilidades = ["pedra", "papel", "tesoura"]

function geradorDeIndice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const computador = possibilidades[geradorDeIndice(0,2)];

if(usuario == "pedra" && computador == "pedra") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Empate`)}

if(usuario == "pedra" && computador == "tesoura") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitoria Usuário`)}

if(usuario == "pedra" && computador == "papel") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitoria Computador`)}

if(usuario == "papel" && computador == "pedra") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitoria Usuário`)}

if(usuario == "papel" && computador == "tesoura") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitoria Computador`)}

if(usuario == "papel" && computador == "papel") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Empate`)}

if(usuario == "tesoura" && computador == "pedra") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitoria Computador`)}

if(usuario == "tesoura" && computador == "tesoura") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Empate`)}

if(usuario == "tesoura" && computador == "papel") {console.log (`Você escolheu: ${usuario} \n Computador escolheu: ${computador} \n ${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitoria Usuário`)}