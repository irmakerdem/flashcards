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

        expect(turn1.evaluateGuess()).to.equal(false);
    
        turn2.evaluateGuess();

        expect(turn2.evaluateGuess()).to.equal(true);
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

// describe('Turn', function() {
//   it('should be a function', () => {
//       const turn = new Turn();
//       expect(Turn).to.be.a('function');
//   });

//   it('should be an instance of Turn', () => {
//       const turn = new Turn();
//       expect(turn).to.be.an.instanceof(Turn);
//   }); 

//   it('should store the user\'s guess to question', () => {
//       const turn = new Turn('Object.keys()');
//       expect(turn.guess).to.be.a('string');
//       expect(turn.guess).to.equal('Object.keys()');
//   }); 

//   it('should store any user\'s guess to question', () => {
//       const turn = new Turn("filter()");
//       expect(turn.guess).to.equal("filter()");
//   }); 

//   it('should store a current card as an object', () => {
//       const card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
//       const turn = new Turn("filter()", card);
//       expect(turn.card).to.equal(card);
//   }); 

//   it('should return the user\'s guess', function() {
//       const card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
//       const turn = new Turn("filter()", card);
      
//       turn.returnCard();
     
//       expect(turn.returnGuess()).to.equal(turn.guess);
//     });

//     it('should return the user\'s card', function() {
//       const card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
//       const turn = new Turn("filter()", card);
      
//       turn.returnCard();
     
//       expect(turn.returnCard()).to.equal(turn.card);
//     });

//     it('should check if the user guessed correct answer', function() {
//       const card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
//       const turn1 = new Turn("filter()", card);
//       const turn2 = new Turn("Object.assign()", card);

//       turn1.evaluateGuess();

//       expect(turn1.evaluateGuess()).to.equal(false);
  
//       turn2.evaluateGuess();
//       expect(turn2.evaluateGuess()).to.equal(true);
//     });

//     it('should give feedback about the user\'s guess', function() {
//       const card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
//       const turn1 = new Turn("filter()", card);
//       const turn2 = new Turn("Object.assign()", card);

//       turn1.evaluateGuess();
//       turn1.giveFeedback();

//       expect(turn1.giveFeedback()).to.equal('incorrect!');
  
//       turn2.evaluateGuess();
//       turn2.giveFeedback();
//       expect(turn2.giveFeedback()).to.equal('correct!');
//     });
// });