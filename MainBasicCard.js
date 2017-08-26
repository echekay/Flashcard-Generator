var BasicCard = require("./BasicCard.js");
var basicArray = require("./basic.json");
var inquirer = require("inquirer");

function startGame() {
  var questionsArray = [];
  for (var i = 0; i < basicArray.length; i++) {
    var basicQuestion = new BasicCard(basicArray[i].front, basicArray[i].back);
    questionsArray.push(basicQuestion);
  }
  console.log(questionsArray);
}

startGame();