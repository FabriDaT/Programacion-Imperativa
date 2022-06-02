const prompt = require("prompt-sync")({ sigint: true });

const suma = (a, b) => a + b
const resta = (numa, numb) => numa - numb
const multiplicar = (numa, numb) => numa * numb
const dividir = (numa, numb) => numa / numb

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

let  numA = parseInt(prompt("Ingresar num A: ")) 
let  numB = parseInt(prompt("Ingresar num B: ")) 

console.log(suma(numA + numB));
