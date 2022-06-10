// Creamos un saludo interactivo pidiendo sus datos y mostrandolo en la pantalla

// Seleccionar al botón que produzcaun evento (id)
// añadir un manejador de eventos
document.getElementById("boton").addEventListener("click", function(){
    // Entrar los datos del usuario, declarando variables
    let nom = document.getElementById("nombre").value
    let tel = document.getElementById("telefono").value 
    // Mostrar el resultado en la pantalla
    document.getElementById("salida").innerHTML="Hola " + nom + " te has hecho acrededor de un vale de 10 soles en consumo y te llamaremos al numero " + tel + " para decirte como podras recoger tu premio."
})