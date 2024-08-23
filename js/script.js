document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("li[data-range]");

    sections.forEach((section) => {
        section.addEventListener("mouseenter", async () => {
            const range = section.getAttribute("data-range").split('-');
            const start = parseInt(range[0]);
            const end = parseInt(range[1]);

            // Llamar a la función para obtener los datos de los personajes
            const characters = await fetchCharacterData(start, end);
            const generator = characterGenerator(characters);

            // Obtener el contenedor donde se agregarán las tarjetas de personajes
            const charactersContainer = section.querySelector('.characters-container');
            charactersContainer.innerHTML = ''; 

            let count = 0;
            for (let card of generator) {
                if (count >= 5) break; 
                charactersContainer.innerHTML += card; 
                count++;
            }

            // Si hay menos de 5 personajes disponibles, mostrar un mensaje
            if (count < 5) {
                const noMoreMessage = document.createElement('p');
                noMoreMessage.classList.add('noMore');
                noMoreMessage.textContent = 'No more characters in this section.';
                charactersContainer.appendChild(noMoreMessage);
            }
        });
    });
});

