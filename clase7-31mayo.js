/*Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?".*/

let edad = 23 

let impar = edad =>{ if (edad % 2 != 0)
       return "Sabias que tu edad es impar!? :O"
}
 


if(edad < 18) {
console.log("No puede pasar al bar" + impar(edad))

} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol. " + impar(edad))

} else if (edad == 21){
    console.log("Bienvenido y felicitaciones por haber llegado a la mayoria de edad!" + impar(edad))
}
else if (edad < 0) {
    console.log("ERROR! edad invalida, por favor ingrese una edad valida"+ impar)
}
 else {
console.log("Puede pasar al bar y tomar alcohol. " + impar(edad))
}


/*totalAPagar()
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.*/ 

function totalAPagar(vehiculo , litrosConsumidos) {
    var total
    var precioLitro
    
    (litrosConsumidos<25 && litrosConsumidos>0) ?  total = 50 : total = 0
    litrosConsumidos>25 ? total = 25 : total = 0
    
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

console.log('El total a pagar es de $' + totalAPagar("coche",10))


/* 
Local de Sándwiches
Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente.
*/

let pollo = 150
let carne = 200
let veggie = 100
let panBlanco = 50
let panNegro = 60
let panSinGluten =  false
let Queso =  false
let Tomate =  false
let Lechuga =  false
let Cebolla =  false
let Mayonesa = false
let Mostaza = false

let precioFinalSandwich = (tipoDeSandwichBase, tipoPan , queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let precio = tipoDeSandwichBase + tipoPan 
    if(queso == true){
        precio +=20
    } else if ( tomate == true){
        precio +=15
    } else if(lechuga == true){
        precio +=10
    } else if (cebolla == true){
        precio +=15
    } else if ( mayonesa == true){
        precio +=5
    } else (mostaza == true)
        precio +=5
    return precio
   

    
}

console.log('El precio de su sandwich es de: $ '+ precioFinalSandwich(pollo,panNegro,true,true,true,false,false,false))




/*  

let loro = (texto) => {
    for (let i = 1 ; i <= 5; i++) {
        console.log(texto);
    }  
}
loro('oye');

**********************************************

function noParesDeContarImparesHasta(numero){
   let impares=0 
   for ( let i = 0; i <= numero; i++ ){
        
        if ((impares % 2) != 0){
            impares++
        }
    }
    return impares
}
console.log(noParesDeContarImparesHasta(4))

**********************************************

function tablaDeMultiplicar(numero) {
 	let i=1
	while (i<= 10) {
		console.log(numero+'*'+ i +"="+(numero*i)
		i++
	}  
}
tablaDeMultiplicar('5')



*/