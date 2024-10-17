// User Stories:
// 1. As a movie fan, I want to see a list of characters so that I can explore my favorite ones.
// 2. As a user, I want to click on a character to view more details about them.
// 3. As a user, I want to search for characters by name so that I can find them easily.
// 4. As a user, I want to switch between light and dark mode for a better viewing experience.

const apiKey = '740459d50c5d79d6b1c5f6c2114f8b1e';
const baseUrl = 'https://api.themoviedb.org/3';

// Global array to store fetched characters
let characters = [];

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchBar').value;
    if (query) {
        searchCharacters(query);
    }
});

// Search for characters using TMDb API
function searchCharacters(query) {
    const url = `${baseUrl}/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                characters = data.results;
                displayCharacters(characters);
            } else {
                console.error('No results found.');
            }
        })
        .catch(error => console.error('Error fetching character data:', error));
}
console.log(`Searching for: ${query}`);
// API call logic will go here

document.addEventListener("DOMContentLoaded", () => {
    fetchPopularCharacters();
});

function displayCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = '';

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';

        // Use character image if available, otherwise use a placeholder
        const characterImage = character.image ? character.image : 'https://placehold.co/200x300';

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

// Search bar functionality to filter characters
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCharacters = characters.filter(character =>
        character.title.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filteredCharacters);
});

// Toggle between light and dark mode
const toggleSwitch = document.getElementById('theme-switch');
toggleSwitch.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Toggle dark mode class on body

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        toggleSwitch.textContent = 'Light Mode';
    } else {
        toggleSwitch.textContent = 'Dark Mode';
    }
});