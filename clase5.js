const prompt = require("prompt-sync")({ sigint: true });

let convertirPulgadas = x => x *2.54
console.log(convertirPulgadas(1))

let convertirUrl = url => `http://www.${url}.com`
console.log(convertirUrl('fabricio'))

let admiracion = frase => `${frase}!!!`
console.log(admiracion (prompt(`ingrese una frase:`)))

let convertirEdadPerros = p => p *7
console.log(convertirEdadPerros(5))

let valorHora = q => q /40
console.log(valorHora(parseInt(prompt(`ingrese su sueldo:`))))

let calculadorImc = (p,a)=>
