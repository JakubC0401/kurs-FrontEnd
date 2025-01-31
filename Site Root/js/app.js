// Function to fetch and display a random joke from an API
async function fetchRandomJoke() {
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
    try {
        const response = await fetch(apiUrl);
        const joke = await response.json();
        console.log(`Here's a joke for you: ${joke.setup} - ${joke.punchline}`);
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
}

// Call the function to fetch and display a joke
fetchRandomJoke();