const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn1, turn2, card;

  beforeEach(() => {
    turn1 = new Turn("filter()", card);
    turn2 = new Turn("Object.assign()", card);
    card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
  });
  
  it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn1).to.be.an.instanceof(Turn);
    }); 

    it('should store the user\'s guess to question', () => {
        expect(turn1.guess).to.be.a('string');
        expect(turn1.guess).to.equal("filter()");
    }); 

    it('should store any user\'s guess to question', () => {
        expect(turn1.guess).to.equal("filter()");
    }); 

    it('should store a current card as an object', () => {
      expect(turn1.card).to.be.an.instanceof(Card);
    }); 

    it('should return the user\'s guess', function() {
        turn1.returnCard();
       
        expect(turn1.returnGuess()).to.equal(turn1.guess);
      });

      it('should return the user\'s card', function() {
        turn1.returnCard();
       
        expect(turn1.returnCard()).to.equal(turn1.card);
      });

      it('should check if the user guessed correct answer', function() {
        turn1.evaluateGuess();

        expect(turn1.evaluateGuess()).to.be.false;
    
        turn2.evaluateGuess();

        expect(turn2.evaluateGuess()).to.be.true;
      });

      it('should give feedback about the user\'s guess', function() {
        turn1.evaluateGuess();
        turn1.giveFeedback();

        expect(turn1.giveFeedback()).to.equal('incorrect!');
    
        turn2.evaluateGuess();
        turn2.giveFeedback();
        
        expect(turn2.giveFeedback()).to.equal('correct!');
      });
});