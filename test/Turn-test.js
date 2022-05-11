const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    it('should be a function', () => {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    it('should store the user\'s guess to question', () => {
        const turn = new Turn('Object.keys()');
        expect(turn.guess).to.be.a('string');
        expect(turn.guess).to.equal('Object.keys()');
    }); 

    it('should store any user\'s guess to question', () => {
        const turn = new Turn("filter()");
        expect(turn.guess).to.equal("filter()");
    }); 

    it('should store a current card as an object', () => {
        const card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
        const turn = new Turn("filter()", card);
        expect(turn.card).to.equal(card);
    }); 

    it('should return the user\'s guess', function() {
        const card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
        const turn = new Turn("filter()", card);
        
        turn.returnCard();
       
        expect(turn.returnGuess()).to.equal(turn.guess);
      });

      it('should return the user\'s card', function() {
        const card = new Card(23, "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?", ["Object.assign()", "Object.keys()", "filter()"], "Object.assign()");
        const turn = new Turn("filter()", card);
        
        turn.returnCard();
       
        expect(turn.returnCard()).to.equal(turn.card);
      });

});