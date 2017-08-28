// What's left to code:
// -------------------
// I need to be able to create a new object based off the constructors using the prototypes function for each card based on the user request.

// I need to be able to use the object from the basic.json file to be called in the constructors object by way of the properties front and back.

// If basic card is chosen, cycle through the array of questions while asking the user each one, and then when the user inputs their answer, run an if statement to see if it matches the back property of that question.

//If cloze card is chosen, run through the array and make sure to correctly identify the cloze section of each question, might be able to just assign a property of cloze to the question index, then ask the user in inquirer, the partial statement, so they can fill in the blank(...), portion of the statement.

// Then run if statement to see if it matches and log correct answer or not.

// -------------------------------------------------------

var BasicCard = require("./MainBasicCard.js");
var ClozeCard = require("./MainClozeCard.js");
var inquirer = require("inquirer");

inquirer.prompt([

  {
    type: "list",
    name: "chooseGame",
    message: "Which game would you like to play?",
    choices: [
      "Basic Flashcards",
      "Cloze-Deleted Flashcards"
      ]
  }

]).then(function(user) {

  if (user.chooseGame === "Basic Flashcards") {

    return user.chooseGame;
  } else  {

    return user.chooseGame;
  }
});