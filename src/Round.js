class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
    }
    returnCurrentCard() {
        return this.deck[0];
    }
    takeTurn() {
        //updates turns count
        this.turns++;
        //evaluates guesses

        //gives feedback

        //stores ids of incorrect guesses

    }
}

module.exports = Round;