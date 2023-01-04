//querySelector
const heading = document.querySelector(".header__texto h2"); // te regresa 0 o 1 elementos
heading.textContent = "Nuevo Heading";
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a"); //te retorna todo lo que encuentre relacionado a lo que está dentro del paréntesis
enlaces[0].textContent = "Nueva navegación";
enlaces[0].classList.add("nueva-clase");
// enlaces[0].classList.remove("navegacion__enlace");

// Generar enlace a un nuevo enlace
const nuevoEnlace = document.createElement("A");

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

// Agregar el texto
nuevoEnlace.textContent = "Estudiando DOM";

// Agregando la clase
nuevoEnlace.classList.add("navegacion__enlace");

//Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);    



console.log(nuevoEnlace);

// Eventos 

// console.log(1);

// window.addEventListener("load", function() { // load espera a que el JS y los archivos que dependen del HTML estén listos
//     console.log(2);
// });

// window.onload = function () {
//     console.log(3);
// }

// document.addEventListener("DOMContentLoaded", function() { // Solo espera a que cargue lo que depende del HTML, no espera al CSS o imágenes
//     console.log(4);
// });


// console.log(5);


// window.onscroll = function () {
//     console.log("Scrolling...")
// }


// Seleccionar Elementos y darles un evento 
// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(e){
//     console.log(e);
//     e.preventDefault();

//     //Validar un formulario


//     console.log("Enviando formulario");
// });




// Eventos de los Inputs y Textarea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leertexto);
email.addEventListener("input", leertexto);
mensaje.addEventListener("input", leertexto);

// El Evento del submit
formulario.addEventListener("submit", function(e){
    e.preventDefault();

    // Validar formulario

    const { nombre, email, mensaje} = datos;

    if(nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta("Todos los campos son obligatorios", "error");

        return; //Corta la ejecución del código
    } 
        mostrarAlerta("Su mensaje ha sido enviado")
});

function leertexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add("error");
    } else {
        alerta.classList.add("enviar")
    }

    formulario.appendChild(alerta);

    //Desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
