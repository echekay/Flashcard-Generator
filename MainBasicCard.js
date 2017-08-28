var BasicCard = require("./BasicCard.js");
var basicArray = require("./basic.json");
var inquirer = require("inquirer");

function startGame() {
  var questionsArray = [];
  for (var i = 0; i < basicArray.length; i++) {
    var basicQuestion = new BasicCard(basicArray[i].front, basicArray[i].back);
    questionsArray.push(basicQuestion);
  };
}


// So when the user picks basic card game:
// Use inquirer to ask the front part of the card.
// If their answer matches the back portion of the card, console.log they were correct.