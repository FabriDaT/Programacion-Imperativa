
let Uppercase = string => string.toUpperCase()
console.log(Uppercase('paso los dias jiji jaja !!'))
 
let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let pelis = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
const pasarMayusculas = arr =>{
    let arrMayus = arr.toString().toUpperCase()
    return arrMayus
}
//console.log(pasarMayusculas(pelis)) 
//console.log(pasarMayusculas(animadas)) 

const unirArr = (arr1, arr2) => {
    arr1.push(arr2)
    const mayusculas = arr1.toString().toUpperCase()
    console.log(mayusculas)
}
const sacarUltimo = array => {
    let elUltimo = array.pop()
}
sacarUltimo(animadas)
unirArr(pelis, animadas)

const asiaScores = [1, 1, 7, 7, 5, 4, 4, 7, 1]
const euroScores = [8, 1, 6, 9, 10, 6, 7, 9, 1]

const compararResultados = (asiaScores, euroScores) =>{
    for(let i = 0 ; i < 9; i++){
        
        if(asiaScores[i] != euroScores[i]){
            console.log(`La calificacion numero ${i+1} es diferente`)
        } else if(asiaScores[i] === euroScores[i]) {
            console.log(`La calificacion numero ${i+1} esta empatada`)
        } 
    }
}
compararResultados(asiaScores,euroScores)


let arregloAinvertir = [1,2,3,4,5,6,7,8,9,10]

for( let i = arregloAinvertir.length ; i >= 0 ; i-- ){
    console.log(arregloAinvertir[i])
}
let invertido = arregloAinvertir.reverse()
console.log(invertido)