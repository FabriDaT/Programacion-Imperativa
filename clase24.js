/*  Ejercicio 1
Dado un array con los datos de una encuesta realizada sobre los temas musicales
más populares —lo que se tiene en el array son objetos definidos con el nombre de
un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
cada uno.
Los votos obtenidos están desordenados.
Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
a) Resolverlo aplicando búsqueda lineal.
b) Resolverlo aplicando búsqueda binaria.  */

let encuestasCanciones = [
    {nombre : "Take five",
    cantidadVotos: 5},
    {nombre : "Me gustas mucho",
    cantidadVotos: 3},
    {nombre : "Love two times",
    cantidadVotos: 7},
    {nombre : "Lei it Be",
    cantidadVotos: 8},
    {nombre : "Satisfaction",
    cantidadVotos: 6}
]


  const bubbleSort = arr => {
    let aux
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if(arr[j].cantidadVotos > arr[j+1].cantidadVotos){
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1]= aux
            }      
        }
     }
  }

  bubbleSort(encuestasCanciones)
  console.log(encuestasCanciones)


  // BUSQUEDA LINEAL

  const busquedaLineal = ( arr , nombreCancion) => {
        for (let i = 0; i < arr.length; i++) {
            if ( arr[i].nombre === nombreCancion) {
                return console.log(`La cantidad de votos para ${nombreCancion} es de ${arr[i].cantidadVotos}`)
            }
            
        }
  }
   busquedaLineal(encuestasCanciones, "Satisfaction")

   // BUSQUEDA BINARIA

  const binarySearch = (arr, Cancion) =>  {
    
    let inferior = 0
    let superior = arr.length - 1
    let medio
    let cancionMomentanea
    let indiceCancion

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nombre == Cancion) {
            indiceCancion = i
        }
        
    }

    while (inferior <= superior) {
       console.log(medio = Math.floor((inferior + superior) / 2 ) )
        cancionMomentanea = arr[medio]     
         
    if (cancionMomentanea == indiceCancion) {
        return medio;
      }
     
      if (cancionMomentanea > indiceCancion ) {

        superior = medio - 1;
      } else {
        inferior = medio + 1;
      }
    }
   
    return -1 // si no encontramos nada
   
  }

  binarySearch ( encuestasCanciones, "Satisfaction" )
 // console.log(binarySearch ( encuestasCanciones, "Take five")) 







/*   Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con un ejemplo simple. 
Queremos que se familiaricen con la sintaxis del mismo, por lo que no haremos énfasis en los datos, sino en la solución.
Dada la siguiente lista:
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
¿Cuál es la posición del número 1?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 6?
¿Cuál es la posición del número 9?
¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el array,
y determinar con un cálculo visual la posición de cada elemento, pero, la propuesta que les hacemos es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 6, y nos indique por consola la posición del mismo. 
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra.
Desafío extra: Orden, lugar y números
Aumentemos la dificultad un toque, y apliquemos lo aprendido en semanas anteriores.
 Queremos que hagan lo mismo del ejercicio anterior —buscar la posición de un número en un array—, pero partiendo de esta lista:
let list = [12,3,5,7,1,22,47,100];

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. 
Luego, respondan las siguientes preguntas:
¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100?
Podrán realizar este ejercicio en un Code Sandbox o Node. Escoger el ambiente en el que se sientan con más comodidad.
 */