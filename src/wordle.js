class WordleGame {
    constructor(secretWord, maxGuesses) {
        this.secretWord = secretWord.toLowerCase();
        this.maxGuesses = maxGuesses;
        this.guessesLeft = maxGuesses;
        this.guesses = [];
    }
    makeGuess(guess) {
        guess = guess.toLowerCase();
        this.guesses.push(guess);
        this.guessesLeft--;

        if (guess === this.secretWord) {
            return 'Correct guess! You won!';
        }

        if (this.guessesLeft === 0) {
            return 'Out of guesses! Game over.';
        }

        if (this.guessesLeft < 0) {
            return 'You have exceeded the maximum number of guesses.';
        }

        const secretWordChars = new Set(this.secretWord);
        const guessChars = new Set(guess);

        const correctLetters = Array.from(guessChars).filter(letter => secretWordChars.has(letter));
        const incorrectLetters = Array.from(guessChars).filter(letter => !secretWordChars.has(letter));
        const correctPositions = Array.from(guess).filter((letter, index) => letter === this.secretWord[index]);

        return {
            incorrectLetters,
            correctLetters,
            correctPositions,
            guessesLeft: this.guessesLeft
        };
    }
}

module.exports = WordleGame;
