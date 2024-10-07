require('dotenv').config({ path: '.env/.env' });

async function getImages(query) {
    const apiKey = '36lW5ujA0bV2qymxm2xyaPDKsFsOtNYl';
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=1&offset=0&rating=g&lang=en`;

    try {
        // Fetch the data from the GIPHY API
        const response = await fetch(endpoint);
        // Parse the JSON response
        const data = await response.json();
        
        // Save the URL of the first gif image
        const gifUrl = data.data[0].images.fixed_height.url;
        
        // Print the URL to the console
        console.log(gifUrl);
        
        // Return the image URL
        return gifUrl;
    } catch (error) {
        console.error('Error fetching GIF:', error);
    }
}

// Example usage:
getImages('dogs');


