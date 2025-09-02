//Espera que el DOM este completamente cargado antes 
document.addEventListener('DOMContentLoaded', () => {
    //Esto selecciona el formulario con la clase sontact.-form__form
    const form = document.querySelector(".contact-form__form")

    //Verifica que el formulario exista en el DOM
    if (form) {
        //Escucha el evento de submit del formulario
        form.addEventListener("submit", async (e) => {
            //prevenir el comportamiento por defecto del navegador de recarga de la página
            e.preventDefault();

            //Convierte los datos del formulario en un objeto en JS
            const formdata = new FormData(form);
            const data = Object.fromEntries(formdata);

            try {
                const response 
            }
        })
    }
})