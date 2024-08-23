async function fetchCharacterData(start, end) {
    const characters = [];
    for (let i = start; i <= end; i++) {
        const response = await fetch(`https://swapi.dev/api/people/${i}/`);
        const data = await response.json();
        characters.push(data);
    }
    return characters;
}
