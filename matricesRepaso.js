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
crear(4,4)
console.table(mat)


const sumarPorFila = (matriz,fila) => {
    let acumulador=0
   
        for (let j = 0; j < matriz[fila-1].length; j++) {
           
           acumulador += matriz[fila-1][j]
        }
        
    
    return acumulador
}

console.log(sumarPorFila(mat,1))

const sumarPorColumna = (matriz,COLUMNA) => {
    let acumulador=0
   
        for (let j = 0; j < matriz.length; j++) {
           
           acumulador += matriz[j][COLUMNA-1]
        }
        
    
    return acumulador
}
console.log(sumarPorColumna(mat,3))

const sumarDiagonalPrincipal = matriz =>{
    let acc = 0 
    for (let i = 0; i < matriz.length; i++) {
         acc += mat[i][i]
        
    }
    return acc
}
console.log(sumarDiagonalPrincipal(mat))

const sumarDiagonalSecundaria = matriz => {
    let acu = 0
 
        for (let i = 0; i < matriz.length; i++) {
            acu += matriz[i][matriz[i].length - i - 1]
        }
    return acu
}
console.log(sumarDiagonalSecundaria(mat))