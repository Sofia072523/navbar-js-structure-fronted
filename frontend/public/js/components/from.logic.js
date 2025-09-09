//Logica del formulario de contacto del proyeco Freelancer

//El objetivo es poder manipular los datos que se registren en el formulario
//Explicación a fondo de las siguientes dos lineas de código
    //== const formdata = new FormData(form);
    //== const data = Object.fromEntries(formdata);

//¿Qué significa new?
//En JavaScriot, la palabra reservada new sirve para crear una nueva instancia
//de un objeto a partir de una función constructora o una clase
//FormData(form) = [
//    ["Nombre", "Karen Sofia Cardona"]
//    ["Telefono", "3233855221"]
//    ["Correo", "karensofia@gmail.com"]
//    ["Mensaje", "Hola que tal?, requiero información"]
//]

//Ahora transformo esos datos en un obejto JS, con esta linea codigo const
//const data = Object.fromEntries(formdata);

//data = [
//    Nombre: "Karen Sofia Cardona",
//    Telefono: "3233855221",
//    Correo: "karensofia@gmail.com",
//    Mensaje: "Hola que tal?, requiero información"
//]

//Por ultimo convierto este objeto en un JSON
//data = [
//    Nombre: "Karen Sofia Cardona",
//    Telefono: "3233855221",
//    Correo: "karensofia@gmail.com",
//    Mensaje: "Hola que tal?, requiero información"
//]



//const { FormData } = require("undici-types");

//Espera que el DOM este completamente cargado antes 
document.addEventListener('DOMContentLoaded', () =>{
    // Esto selecciona el formulario con la clase contact-form__form
    const form = document.querySelector(".contact-form__form")

    // Verifica que el formulario exista en el DOM
    if (form) {
        // Escucha el evento submit del formulario
        form.addEventListener("submit", async (e) => {
            // Prevenir el comportamiento por defecto del navegador de recarga de la página
            e.preventDefault();

            // Convierte los datos del formulario en un objeto JS
            const formdata = new FormData(form);
            const data = Object.fromEntries(formdata);
            
            try{
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    // Convierte el objeto de datos del formulario a formato JSO
                    body: JSON.stringify(data),
                });
                
                // Verifica si la respuesta es éxitosa (código 200-299)
                if (response.ok) {
                    alert("Mensaje enviado con éxito");
                    form.reset();
                } else {
                    alert("Hubo un problema al enviar el mensaje") // Notifica de un error en el servidor
                }
            }catch (error) {
                console.error(error);
                alert("Error de conexión")
            }
        });
    };
});
