const prompt = require('prompt-sync')();

let num =   Number(prompt("Digite um numero: "))

if (num % 2 ===0){
    console.log("O numero é par")
}
else (console.log("É impar"))