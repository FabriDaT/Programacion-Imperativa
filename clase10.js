let pelis = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(pelis[4])

let Uppercase = string => string.toUpperCase()
console.log(Uppercase('paso los dias JIJI JAJA !!'))
 
let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

let unirArrays = (array1, array2) => {
    let nuevoArray = []
   
    nuevoArray= array1.push( array2.toUpperCase())
    return nuevoArray
}
console.log(unirArrays(pelis, animadas)) 