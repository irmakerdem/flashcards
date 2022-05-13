const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
// const Card = require('../src/Card');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    // .map to create cards
    const deckData = prototypeQuestions.map((cardData) =>
      // console.log(cardData.id)
    new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer)
    )
    console.log(deckData)
    //place cards in deck
    // this.printMessage(deck, round);
    // this.printQuestion(round);
  }

}

module.exports = Game;