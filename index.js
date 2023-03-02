console.log("--------------Exercicio 1---------------------------------");

console.log("Aplicativo iniciado");

console.log("--------------Exercicio 2---------------------------------");

const teste = process.argv[2]

if(!teste){
    console.log("Input Invalido! Digite alguma coisa para eu mostrar, tonto!");
}else{
    console.log("Você digitou a palavra:", teste);
}

