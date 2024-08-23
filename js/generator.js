function* characterGenerator(characters) {
    for (let character of characters) {
        yield createCharacterCard(character);
    }
}

function createCharacterCard(character) {
    return `
        <div class="card shadow-sm p-3 rounded">
            <div class="circle"></div>
            <div>
                <h2>${character.name}</h2>
                <p>Height: ${character.height} cm</p>
                <p>Mass: ${character.mass} kg</p>
            </div>
        </div>
    `;
}
