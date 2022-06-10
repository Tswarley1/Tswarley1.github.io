// creamos un juego de numeros al azar debemos elegir
// Colocar los números al azar
let num = Math.ceil(Math.random()*10)

// manejador de Eventos
document.getElementById("boton").addEventListener("click", function(){
    // obtener la informacion
    let dato = document.getElementById("numero").value
    // mostrar la respuesta de acuerdo a la condicion
    if  (num == dato){
        alert("Felicitaciones perro has ganado el juego")
        // Recarga la información 
        location.reload()
    }
    else{
        alert("Cagaste perro para la otra sera el numero era "+ num + " si quieres vuelve a intentarlo")
        location.reload()
    }
} )