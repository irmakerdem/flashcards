const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
        // this.currentCard = this.returnCurrentCard();
        this.currentCard = this.deck[0]
    }
    returnCurrentCard() {
        return this.currentCard = this.deck[this.turns];
    }
    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.turns++;
        this.returnCurrentCard();
        return turn.giveFeedback();
    }
}

module.exports = Round;