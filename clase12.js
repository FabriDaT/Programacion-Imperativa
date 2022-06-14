const alicia = [100, 80, 25];
const bob = [100, 10, 75];
let Etapas= [];
let ganador='';

 let Concurso = {
    encontrarGanador: function(alicia, bob) {
    
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
    

    for (let i = 0 ; i< alicia.length ; i++){
        alicia[i] > bob[i] ?  puntosPrimerParticipante++ : puntosSegundoParticipante++
        alicia[i] > bob[i] ?    Etapas[i]= "alicia" : Etapas[i]="bob"
        if (alicia[i] === bob[i] ) console.log('Ambos participtante empataron en la ronda ' + (i+1))
    }

    if (puntosPrimerParticipante > puntosSegundoParticipante) {
        ganador = "Alicia"

    }   else if(puntosPrimerParticipante < puntosSegundoParticipante) {
        ganador = "Bob"
        
    } else  {
        ganador = "Empate!"
    }
    return ganador
},
     etapas: Etapas,
     ganadorFinal: ganador  ,
     exportarResutlados: function (etapas){
         let exportar = JSON.stringify(this.etapas)
         return exportar
        
     }
 }


console.log("El ganador es: " + Concurso.encontrarGanador(alicia, bob) + " participante");

 const imprimir = (num1, num2) =>{
    for(let i = 1; i <= 10; i++){
        if( num1 % i === 0){
            console.log('Digital')
        } else if( num2 % i === 0){
            console.log('House')
        } else if (((num1 % i === 0) && (num2 % i === 0))){
            console.log('Digital House')
        } else console.log('holas')
    }
 }
imprimir(7,4)
