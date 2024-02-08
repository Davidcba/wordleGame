document.getElementById('wordleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    console.log(JSON.stringify({ guess }))
    // Send the guess to the backend API
    fetch('/wordle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ guess })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('gameState').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {

            console.error('Error:', error);
        });
});
