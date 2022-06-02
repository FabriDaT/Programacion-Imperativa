const prompt = require("prompt-sync")({ sigint: true });

/*let convertirPulgadas = pulgadas => pulgadas *2.54
let pulgadas = Number(prompt("ingrese las pulgadas a convertir a cm: "))
console.log(convertirPulgadas(pulgadas))

let convertirUrl = url => `http://www.${url}.com`
let url = prompt("ingrese texto a convertir a url: ")
console.log(convertirUrl(url))

let admiracion = frase => `${frase}!!!`
console.log(admiracion (prompt(`ingrese una frase:`)))

let convertirEdadPerros = p => p *7
console.log(convertirEdadPerros(5))

let valorHora = q => q /40
console.log(valorHora(parseInt(prompt(`ingrese su sueldo:`))))
*/


let calculadorIMC = (peso,altura)=> peso / (altura*altura) 

let peso = Number(prompt("ingrese su peso: "))
let altura = Number(prompt("ingrese su altura: "))

console.log(calculadorIMC(peso,altura))
