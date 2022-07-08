//1. Crear una función que imprima todos los dígitos decimales, del 0 al 9, usando un ciclo For.
// https://codesandbox.io/s/mesa-ejercicio-1-bvthk?file=/src/index.js


const imprimirDecimales = () => {
        for (let i = 0; i <= 8; i++) {
            for (let j = 0; j <= 9; j++) {
                
                console.log(i +"," + j) 
            }     
        }
    }
// imprimirDecimales();

/*
const mostrarDecimales = () => {
    for (let i = 0.0; i <= 9; i+= 0.1){
        console.log(i.toFixed(2));
    } 
}
mostrarDecimales();

*/

//2. Crear una función que imprima los números entre el 5 y el 20, saltando de
//tres en tres. https://codesandbox.io/s/mesa-21-ejercicio-2-3n0np

const sumarDeA3 = () =>{
    for (let i = 5; i <= 20; i=i+3) {
        console.log( i )
        
    }
}
// sumarDeA3()

//3. Crear una función que imprima la sumatoria de todos los números entre el
//0 y el 100.
//https://codesandbox.io/s/mesa-21-ejercicio-3-zw962?file=/src/index.js

const sumatoria0a100 = () =>{
    let acc = 0
    for (let i = 0; i <= 100; i++) {
       
        acc +=  i 
    } 
    
return acc
}
// console.log(sumatoria0a100())

//4. Crear una función que reciba un string y luego imprimir la cantidad de
//vocales que se encuentran en dicha frase.
//https://codesandbox.io/s/mesa-21-ejercicio-4-x9frm?file=/src/index.js

const cantVocales = texto => {
     let mayuscula = texto.toUpperCase()
    let contadorVocales=0
    for (let i = 0; i < texto.length; i++) {
        if( mayuscula[i] == "A" || mayuscula[i] == "E" || mayuscula[i] == "I" || mayuscula[i] == "O" || mayuscula[i] == "U" )
            contadorVocales++
    }
    return contadorVocales
}

// console.log(cantVocales("matematica")) 




//5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
//contenido sea igual a la original pero invertida.
//https://codesandbox.io/s/mesa-21-ejercicio-5-812tw?file=/src/index.js

let listix = [1,2,3,4,5,6,7,8,9,10]

const invertirLista = lista => {
    let nuevaLista=[]
    
    for (let i = lista.length -1 ; i >= 0; i--) {
            nuevaLista.push(lista[i])
        
       }
        return nuevaLista
    }
console.log(invertirLista(listix))

//6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
//forma :
//1
//22
//333
//4444
//55555
//666666