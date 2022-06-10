//  Juego de preguntas que salgan al azar y nos de una calificacion al final
//  Array para las preguntas --> Bidimensional
let lista = [
    [`¿Cuánto es 3*3`, "27"],
    [`¿qué color resulta al mezclar el azul con el amarrillo?`, "verde"],
    [`¿Cuántos jugadores participan en un partido de futbol?`, "22"]
]
// Crear variables que usaré

let pregunta, respuesta
let formuladas = 0 //Cuántas preguntas plantearás
let acertadas = 0 //respuestas acertadas

hazpregunta();

//creamos el evento a través del ID
document.getElementById("boton").addEventListener("click", function(){
    // obtener el dato
    let entrada = document.getElementById("respuesta").value

    if(entrada == respuesta){//decirnos cuantas acerto
        acertadas++
    }
    if(formuladas < 3){//Escribo cuántas preguntas le haré
        hazpregunta() //método que crearé aparte, para realizar un acción
    }
    else{
        muestraresultado() //frase si acertó o no, muestra resultado
    }
})

function hazpregunta(){
    let e//variable interna  
    //Se extrae una pregunta/respuesta al azar del array
    e =lista.splice(numAlet(0,lista.length-1),1);
    // se guardan la pregunta y la respuesta
    pregunta = e[0][0];
    respuesta = e[0][1];

    // se muestra la pregunta
    document.getElementById("pregunta").innerHTML=pregunta;
    // se borra lo escrito anteriormente por el usuario
    document.getElementById("respuesta").value="";
    // contar las preguntas realizadas
    formuladas++
}
function numAlet(max,min){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}
// Comprueba el número de preguntas acertadas y muestra mensaje en función de este
function muestraresultado(){
    let resultado; // Variable auxiliar
    switch (acertadas) {
        case 0:
            resultado ="Estas bajo en culutra general, a leer"
            break;
        case 1:
            resultado = "Vas bien, pero te falta"
            break;
        case 2:
            resultado = "Ui casi ganas"
            break;
        case 3:
            resultado = "Excelente te las sabes todas"
            break;        
    }
    document.getElementById("salida").innerHTML=resultado
    }
