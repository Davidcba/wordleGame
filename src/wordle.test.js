
const WordleGame = require('./wordle');

test('Correct guess', () => {
    const game = new WordleGame('hello', 5);
    expect(game.makeGuess('hello')).toBe('Correct guess! You won!');
});

test('Incorrect guess, number of remaining guesses, letters used, correct and incorrect letters and positions', () => {
    const game = new WordleGame('hello', 5);
    expect(game.makeGuess('world')).toEqual({
        incorrectLetters: ['w', 'r', 'd'],
        correctLetters: [ 'o','l'],
        correctPositions: ['l'],
        guessesLeft: 4
    });
});


test('Incorrect guess', () => {
    const game = new WordleGame('hello', 1);
    expect(game.makeGuess('world')).toBe('Out of guesses! Game over.');
});
