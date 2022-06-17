// Creamos un saludo interactivo pidiendo sus datos y mostrandolo en la pantalla

// Seleccionar al botón que produzcaun evento (id)
// añadir un manejador de eventos
document.getElementById("boton").addEventListener("click", function(){
    // Entrar los datos del usuario, declarando variables
    let nom = document.getElementById("nombre").value
    let tel = document.getElementById("telefono").value 
    // Mostrar el resultado en la pantalla
    document.getElementById("salida").innerHTML="Gracias " + nom + " por haber rellenado tus datos, te has hecho acreedor de un 15% en cualquiera de nuestros productos, en los proximos minutos te llegara al numero " + tel + " un codigo por mensaje, que es el descuento  para que lo puedas usar a la hora de comprar en nuestra tienda."
})