const escolha = process.argv[2].toLowerCase()
const numero = Number(process.argv[3])

function geradorNumerico(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const computador = Number(geradorNumerico(0, 10))
const resultado = numero + computador

// if(!escolha && !numero){console.log("Input Invalido! Digite alguma coisa para eu mostrar, tonto!")};

if (escolha == "par" && resultado % 2 == 0) { console.log(`Você escolheu par com o numero ${numero} e o computador escolheu impar com o número ${computador}, o resultado final ${resultado}, você venceu!`) };

if (escolha == "par" && resultado % 2 !== 0) { console.log(`Você escolheu par com o numero ${numero} e o computador escolheu impar com o número ${computador}, o resultado final ${resultado}, computador venceu!`) };

if (escolha == "impar" && resultado % 2 == 0) { console.log(`Você escolheu par com o numero ${numero} e o computador escolheu par com o número ${computador}, o resultado final ${resultado}, computador venceu!`) };

if (escolha == "impar" && resultado % 2 !== 0) { console.log(`Você escolheu par com o numero ${numero} e o computador escolheu par com o número ${computador}, o resultado final ${resultado}, você venceu!`) };