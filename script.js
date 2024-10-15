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
