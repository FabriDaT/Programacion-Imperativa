/*Ejercicio 1:
Desarrollar una función para cada uno de las siguientes apartados:
1.Que reciba por parámetro un número entero y retorne su doble.
2.Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.
3.Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne
 la división de ambos.
*/

const dobleDeUnNumero = numero =>  numero*2

const multiplicacion = (num1, num2) => num1*num2

const distintoCeroYDision = (n1, n2) => {
    if(n1 != 0 && n2 != 0){
        return n1/n2
    }
}

console.log(dobleDeUnNumero(12))
console.log(multiplicacion(6,6))
console.log(distintoCeroYDision(25,5))


/*Ejercicio 2:
1. Deberás escribir un objeto literal llamado ciclista que contenga las siguientes propiedades 
que deberás completar
con tus datos:
a-nombre
b-apellido
c-edad
d- tiene Bici (TRUE/FALSE)
2. Teniendo en cuenta los datos del punto número 1.
Crear una función que reciba por parámetro el objeto y retorne un string en base a las 
siguientes condiciones :
-si edad es mayor o igual a 18 y tiene bici  “puede competir”
-si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
-si no tiene bici “No podrá competir ”
*Deberás realizar la invocación de la función de forma que se pueda ver el resultado*/

let ciclista = {
    nombre: "Fabricio",
    apellido: "Turrina",
    edad: 28,
    tieneBici: true
}

const funcionCiclista = objeto =>{
    if( (objeto.edad >= 18) && (objeto.tieneBici = true)){
        return "PUEDE COMPETIR! =D "
    } 
     else if ( (objeto.tieneBici = true)&& (objeto.edad < 18) ){
        return "Podra competir pero con un adulto acompañante"
    } 
     else if( objeto.tieneBici = false){
        return "No podra competir :("
     }
}


console.log(funcionCiclista(ciclista))


/*Ejercicio 3:
1.Crear un array VACÍO llamado competidores.
2. Dados estos tres objetos
a. Agregarlos al array. (utilizando un método JS, pensa cual podrías utilizar)
b. Mostrar por consola el array para ver que contenga esos objetos.
3. Crea una función que reciba el array competidores como parámetro, e incremente en 100
la cantidad de kilómetros recorridos de cada uno de los competidores, llámala competencia100Km .
* Debes utilizar alguna estructura de repetición vista en la materia.
4. Mostrar por consola el array de competidores antes y después de la ejecución de la función.*/

let competidor1 = {
    nombre: 'Juan',
    edad: 42,
    kilometrosRecorridos: 80,
}
let competidor2 = {
    nombre: 'Sofia',
    edad: 22,
    kilometrosRecorridos: 90
}
let competidor3 = {
    nombre: 'Maria',
    edad: 45,
    kilometrosRecorridos: 70
}

let competidores = []

competidores.push(competidor1,competidor2,competidor3)
console.log(competidores)


const competencia100Km = array => {
    for( let i = 0; i < array.length ; i++){
        array[i].kilometrosRecorridos += 100
    }
}

competencia100Km(competidores)

console.log(competidores)