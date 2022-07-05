// crear una matriz

let mat=[]

const crear= (filas, columnas) => {
    for (let i = 0; i < filas; i++) {
        mat[i]=[]
        for (let j = 0; j < columnas; j++) {
            mat[i][j] = i * columnas + j + 1
            
        }
        
    }
}
crear(3,3)
console.table(mat)


const sumarPorFila = (matriz,fila) => {
    let acumulador=0
   
        for (let j = 0; j < matriz[fila-1].length; j++) {
           
           acumulador += matriz[fila-1][j]
        }
        
    
    return acumulador
}

//console.log(sumarPorFila(mat,1))

const sumarPorColumna = (matriz,COLUMNA) => {
    let acumulador=0
   
        for (let j = 0; j < matriz.length; j++) {
           
           acumulador += matriz[j][COLUMNA-1]
        }
        
    
    return acumulador
}
//console.log(sumarPorColumna(mat,3))

const sumarDiagonalPrincipal = matriz =>{
    let acc = 0 
    for (let i = 0; i < matriz.length; i++) {
         acc += mat[i][i]
        
    }
    return acc
}
// console.log(sumarDiagonalPrincipal(mat))

const sumarDiagonalSecundaria = matriz => {
    let acu = 0
 
        for (let i = 0; i < matriz.length; i++) {
            acu += matriz[i][matriz[i].length - i - 1]
        }
    return acu
}

//console.log(sumarDiagonalSecundaria(mat))

// 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.

let lista = [999, 10, 9 , 8 , 7 , 6, 888]

const invertirLista = list => {
    for (let i = 0; i < list.length; i++) {
        console.log(list[list.length-i-1])
        
    }
}
// invertirLista(lista)


/* Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma :
1
22
333
4444
55555
666666
*/


const piramide = () => {
    for (let i = 1; i <= 30; i++) {
        for (let j = 0; j < i; j++) {
            
             //console.log(i) 
            // console.log("\n") 
            
        }
        
    }
}
piramide()

const sumarTodoMenosAlgunaColumna = (matriz, columna) =>{
    
    let acu = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] !== matriz[i][columna-1])
                acu += matriz[i][j]
        }
        
    }
    return acu
}

//console.log(sumarTodoMenosAlgunaColumna(mat, 3)) 


/*1 .
a. Tenés un array de estudiantes con su desempeño académico actual.
- Crear una función que reciba por parámetro un array de estudiantes.
- Deberá incremente 2 puntos la propiedad notaConcepto a los estudiantes
cuya notaContenido sea mayor o igual a 6
*/
 let estudiantes = [
    {nombre:"Juan", notaConcepto: 6, notaContenido: 6},
    {nombre:"Mario", notaConcepto: 8, notaContenido: 8},
    {nombre:"Julia", notaConcepto: 8, notaContenido: 5},
    {nombre:"Sofia", notaConcepto: 2, notaContenido: 4}
 ]

 const incrementarNotaConcepto = matriz => {
    for (let i = 0; i < matriz.length; i++) {
        if(matriz[i].notaContenido >= 6){

            matriz[i].notaConcepto += 2
        }
        
    }
 }
 incrementarNotaConcepto(estudiantes)
 //console.log(estudiantes)


/* 2 .
a. Desarrollar una función que reciba por parámetro él array de países y ordene de
forma ascendente según su población
*/

let paises = [
    {
        nombre: "Venezuela",
        contienente: "Sudamerica",
        poblacion: 25000000
    },
    {
        nombre: "Australia",
        contienente: "Oceania",
        poblacion: 18000000
    },
    {
        nombre: "Tailandia",
        contienente: "Asia",
        poblacion: 32000000
    },
    {
        nombre: "Francia",
        contienente: "Europa",
        poblacion: 65000000
    }
]

const Ordenar = arr => {
    let aux
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if(arr[j].poblacion > arr[j+1].poblacion){
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1]= aux
            }      
        }
     }
}
Ordenar(paises)
//console.log(paises)

/*
3 .
a. Crear una matriz de 4 filas x 5 columnas de numeros enteros
b. Crear una función que reciba la matriz generada por parámetro, deberá retornar la
sumatoria de todos los valores excepto de la cuarta columna
c. Crear una función que reciba la matriz generada por parámetro y un valor numérico,
deberá retornar un array con todos los valores menores al parámetro recibido como
valor Numérico
*/

let matrizNumeros = [
    [1,1,1,15,1],
    [1,1,1,56,1],
    [1,1,1,44,1],
    [1,1,1,31,1],
]

const sumatoria = matriz => {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (j !== 3){
                acc += matriz[i][j]
            }
            
        }
        
    }
    return acc
}
console.log(sumatoria(matrizNumeros)) 


const mostrarMenores = (matriz, valor) => {
    let newArray=[]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < valor){
                newArray.push(matriz[i][j])

            }
            
        }
        
    }
    return newArray
}
console.log ( mostrarMenores(matrizNumeros, 50) )