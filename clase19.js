// Ordenar de forma Ascendente y DEScendente el siguiente array de numeros

const edades = [33, 27, 34, 30, 54, 25];

const bubleSort = arr =>{
    let aux;
    for(let i = 0; i < arr.length ; i++){

        for (let j = 0; j < arr.length - 1; j++) {
            
                if (arr[j] > arr[j+1]){
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = aux
                }
            
        }
    }
}
bubleSort(edades)
//console.log(edades)


// Ordenar el siguiente array de LETRAS

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]


bubleSort(letras)
//console.log(letras)

//Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta,
// la misma deberá retornar él array ordenado .
// Desarrollar una función que ordene internamente de forma ascendente según la edad del titular
 // de cada cuenta, la misma deberá retornar él array ordenado , e.


let arrayCuentas =
 [
     {
         titular: "Arlene Barr",
         estaHabilitada: false,
         saldo: 3253.40,
         edadTitular: 33,
         tipoCuenta: "sueldo"
     },
     {
         titular: "Roslyn Torres",
         estaHabilitada: false,
         saldo: 3229.45,
         edadTitular: 27,
         tipoCuenta: "sueldo"
     },
     {
         titular: "Cleo Lopez",
         estaHabilitada: true,
         saldo: 1360.19,
         edadTitular: 34,
         tipoCuenta: "corriente"
     },
     {
         titular: "Daniel Malone",
         estaHabilitada: false,
         saldo: 3627.12,
         edadTitular: 30,
         tipoCuenta: "sueldo"
     },
     {
         titular: "Ethel Leon",
         estaHabilitada: true,
         saldo: 1616.52,
         edadTitular: 34,
         tipoCuenta: "sueldo"
     },
     {
         titular: "Harding Mitchell",
         estaHabilitada: true,
         saldo: 1408.68,
         edadTitular: 25,
         tipoCuenta: "corriente"
     }
]

console.log(arrayCuentas)
const ordenaPorAtributo = arreObjetos => {

 
    for(let i = 0; i < arreObjetos.length ; i++){

        for (let j = 0; j < arreObjetos.length - 1; j++) {
            
                if (arreObjetos[j].saldo < arreObjetos[j+1].saldo){
                    let aux = arreObjetos[j]
                    arreObjetos[j] = arreObjetos[j+1]
                    arreObjetos[j+1] = aux
                
                }
            
        }
    }
}

ordenaPorAtributo(arrayCuentas)
console.log(arrayCuentas)