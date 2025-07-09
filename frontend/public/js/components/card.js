//Exportamos una función llamada loadcards que acepta:
//-containerSelector: un selector CSS para el contenedor donde van las card 
//-carIds: un array es opcional con los id de las cards que se quieren mostrar.
export async function loadCards(containerSelector, cardIds = []) {

    //Obtenemos el contenedor del DOM
    const container = document.querySelector(containerSelector);
    
    if(!container)return; //Si no exite simplemente nos salimos

    try{
        const[templateRes, dataRes] = await Promise.all([
            //Hacer 2 fetch al mismo tiempo
            //1- Es para la plantilla
            //2- Es para los datos
            fetch("/frontend/public/views/components/card.html"),
            fetch("/frontend/public/data/card.json"),
        ])

        //Convertir las respuestas a textos y los datos a json.
        const template = await templateRes.text();
        const cards = await dataRes.json();

        //Filtramos las cards si se proporcina los IDs específicos
        const filteredCards = cardIds.length
        ? cards.filter(card => cardIds.includes(card.id)) //Solo las que están en el arreglo
        :cards; //Si no hay filtro uselas todas

        filteredCards.forEach(card =>{

            //Remplazar los pacecholder {{...}} del template con los datos reales
            let html = template
            .replace("{{title}}",card.title)
            .replace("{{icon1}}",card.icon1)
            .replace("{{icon2}}",card.icon2)
            .replace("{{description}}",card.description)

            container.innerHTML += html;
        });
    }
    
    catch(error){
        console.error("Error cargando las cards", error)
    }
}