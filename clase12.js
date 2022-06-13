const alicia = [10, 80, 75];
const bob = [90, 20, 25];
let Etapas= [];
let ganador;

 let Concurso = {
    encontrarGanador: function(alicia, bob) {
    
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
    

    for (let i =0 ; i< alicia.length ; i++){
        alicia[i] > bob[i] ?  puntosPrimerParticipante++ : puntosSegundoParticipante++
        alicia[i] > bob[i] ?    Etapas[i]= "alicia" : Etapas[i]="bob"
    }
    puntosPrimerParticipante > puntosSegundoParticipante ? ganador = "Alicia" : ganador = "Bob"
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