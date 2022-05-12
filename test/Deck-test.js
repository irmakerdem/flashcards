const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

    it('should be a function', () => {
        const deck = new Deck;

        expect(Deck).to.be.a('function');
    });
  
    it('should be an instance of Deck', () => {
        const deck = new Deck();

        expect(deck).to.be.an.instanceof(Deck);
    }); 
  
    it('should hold an array of card objects', () => {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
        const card3 = new Card(19, "What does the callback function for filter() return?", ["boolean", "an array of the same length", "a single value of any data type"], "boolean");
        const card4 = new Card(24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true");
        const card5 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");

        const deck = new Deck([card1, card2, card3, card4, card5]); 

        expect(deck.cards).to.be.an('array');

        expect(deck.cards).to.deep.equal([card1, card2, card3, card4, card5]);
    }); 

    it('should count the number of cards in the deck', () => {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
        const card3 = new Card(19, "What does the callback function for filter() return?", ["boolean", "an array of the same length", "a single value of any data type"], "boolean");
        const card4 = new Card(24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true");
        const card5 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");

        const deck = new Deck([card1, card2, card3, card4, card5]); 

        expect(deck.countCards()).to.equal(5);
      }); 

});