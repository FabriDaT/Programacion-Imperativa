let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o
//crear otras para tener varias pruebas)

let impar = (edad % 2 != 0) ? "sabias que tu edad es impar?" : ""

if(edad < 18) {
console.log("No puede pasar al bar" + impar)

} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
impar=(edad)

} else if (edad == 21){
    console.log("Bienvenido y felicitaciones por haber llegado a la mayoria de edad!" + impar)
}
else if (edad < 0) {
    console.log("ERROR! edad invalida, por favor ingrese una edad valida"+ impar)
}
 else {
console.log("Puede pasar al bar y tomar alcohol."+ impar)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

function totalAPagar(vehiculo , litrosConsumidos) {
    var total
    var precioLitro
    
    (litrosConsumidos > 0 && litrosConsumidos < 25) ?  total = 25 : total = 0
    litrosConsumidos > 25 ? total = 25 : total = 0
    
    switch (vehiculo) {
        case 'coche':
            precioLitro = 86
            return precioLitro * litrosConsumidos + total
        case 'moto':
            precioLitro = 70
            return precioLitro * litrosConsumidos + total
        case 'autobus' : 
            precioLitro = 55
            return precioLitro * litrosConsumidos + total
        }
}

console.log('El total a pagar es de $' + totalAPagar("moto",1))


////////////////////////////////////////////////////////////////////////////