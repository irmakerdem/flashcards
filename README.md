# Flashcards

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Learn about object-oriented programming concepts through this flashcards game!! 🤓 You will be faced with 30 questions you can answer directly in the console 🖥. Could you get all of them right?? Try it and find out! Good luck! 🍀

### Technologies
- JavaScript
- Mocha 
- Chai

### Set Up
1. Obtain SSH code/address from [repo](https://github.com/irmakerdem/flashcards).
2. Run `git clone [remote-address] [what you want to name the repo]`.
3. `cd` into the directory.
4. Run `npm install`.
5. Run `node index.js` to play the game!

### Features
![flashcards gif](https://media.giphy.com/media/UnckJwNKsrNzkRvxC9/giphy.gif)

- When `node index.js` is run, user sees the message "Welcome to FlashCards! You are playing with 30 cards."
- User can type their answer with the numbers `1`, `2` or `3` or use the **arrows** on the keyboard and hit **enter**
- User can see whether their answer is correct or incorrect
- User can see their final score as a percentage if they go through all 30 cards
- At any point in the game, user can exit using **control + c**

### Future Features
- 

### Reflection
- The first challenge was getting comfortable writing tests from scratch based on the rubric to then write implementation code for. It was difficult to get used to using 'expect' syntax.
- The second challenge was the Round class. The constructor method needed a currentCard property which was difficult in determining its value for (i.e. I had to either assign the a method to it or indicate that it is always the first card in the deck). Furthermore, the takeTurn function required an instance of the Turn class (which requires two paramaters), hence adding to the complexity. Writing it blocks for this functionatily was hard since the function had many parts to it.

### Contributors
- [Irmak Erdem](https://www.linkedin.com/in/irmakerdem/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/flash-cards.html).