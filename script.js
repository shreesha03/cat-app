const accessKey = 'vw9oJxMYIGFHpo4et9AV3FbqFjIxeIp3ARGGX-GifeM'; // Your Unsplash access key
const query = 'sorry apologize'; // You can adjust this query
const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${accessKey}`;

let btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    (async () => {
        try {
            let response = await fetch(url);
            const data = await response.json();

            // Check if results exist
            if (data.results.length > 0) {
                // Pick a random image from the results
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const imageUrl = data.results[randomIndex].urls.regular;

                // Set the image src to the retrieved URL
                document.getElementById('img').src = imageUrl;
            } else {
                alert("No images found for your query.");
            }
        } catch (err) {
            alert("Couldn't retrieve a cat for you :(");
            console.error(err);
        }
    })();
});
