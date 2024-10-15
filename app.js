// User Stories:
// 1. As a movie fan, I want to see a list of characters so that I can explore my favorite ones.
// 2. As a user, I want to click on a character to view more details about them.
// 3. As a user, I want to search for characters by name so that I can find them easily.
// 4. As a user, I want to switch between light and dark mode for a better viewing experience.

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchBar').value;
    if (query) {
        searchCharacters(query);
    }
});

function searchCharacters(query) {
    // This function will interact with the API to fetch character data
    console.log(`Searching for: ${query}`);
    // API call logic will go here
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://ghibliapi.vercel.app/films')
        .then(response => response.json())
        .then(data => {
            displayCharacters(data);
        })
        .catch(error => console.error('Error:', error));
});

function displayCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = '';

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';
        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.title}">
            <h2>${character.title}</h2>
            <p>${character.description.slice(0, 100)}...</p>
        `;
        characterCard.addEventListener('click', () => showCharacterDetails(character));
        characterList.appendChild(characterCard);
    });
}

function showCharacterDetails(character) {
    const characterDetails = document.getElementById('character-details');
    characterDetails.innerHTML = `
        <h2>${character.title}</h2>
        <img src="${character.image}" alt="${character.title}">
        <p>${character.description}</p>
    `;
}

const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCharacters = characters.filter(character =>
        character.title.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filteredCharacters);
});
