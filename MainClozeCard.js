var ClozeCard = require("./ClozeCard.js")

function startGame() {
  var questionsArray = [];
  for (var i = 0; i < basicArray.length; i++) {
    var basicQuestion = new BasicCard(basicArray[i].front, basicArray[i].back);
    questionsArray.push(basicQuestion);
  };
}