// Directions
// ------------------------------------------------------------------------

// * Create a new file named `BasicCard.js`:

//   * This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
//     `module.exports = BasicCard;`

//   * The constructor should accept two arguments: `front` and `back`.

//   * The constructed object should have a `front` property that contains the text on the front of the card.

//   * The constructed object should have a `back` property that contains the text on the back of the card.

// -------------------------------------------------------------------------

var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
};

module.exports = BasicCard;

// --------------------------------------------------------------------------
// Initially, I wanted to make a physics-based flashcard game, but realized that using the inquirer package and requiring the user the input the answer as a string will most likely end in a them getting the answer wrong if they don't type the exact answer I provided.

// So I scrapped the idea, which could've been solved using multiple choice functionality, but time isn't on my side to implement it.

// --------------------------------------------------------------------------

// var question1 = new BasicCard("What is the mass of the sun?", "1.989*10^30 kg");
// var question2 = new BasicCard("What does quantization in physics mean?", "It's the process of transition from a classical understanding of physical phenomena to a newer understanding known as quantam mechanics. It is a procedure for constructing a quantum field theory starting from a classical field theory.");
// var question3 = new BasicCard("What is a black hole's event horizon?", "A well defined surface or edge within which nothing can be unseen and nothing can escape, because the necessary escape velocity would equal or exceed the speed of light (a physical impossibility).")

// // console.log("\n");
// console.log("Question: " + question1.front + "\nAnswer: " + question1.back);
// console.log("----------");
// console.log("Question: " + question2.front + "\nAnswer: " + question2.back);
// console.log("----------");
// console.log("Question: " + question3.front + "\nAnswer: " + question3.back);

