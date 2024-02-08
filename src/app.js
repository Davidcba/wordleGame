const express = require('express');
const path = require('path');
const WordleGame = require('./wordle');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.post('/wordle', (req, res) => {
    const guessedWord = req.body.guess;
    const wordle = new WordleGame('hello', 5);
    const gameState = wordle.makeGuess(guessedWord);

    res.json(gameState);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
