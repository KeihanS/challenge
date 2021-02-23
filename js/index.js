function ageInDays() {
  let birthYear = prompt("What year were you born?");
  let ageInDayss = (2021 - birthYear) * 365;
  let h1 = document.createElement("h1");
  textAnswer = document.createTextNode("your are " + ageInDayss + " days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("result-box").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
}

function generateCat() {
  let img = document.createElement("IMG");
  img.setAttribute("src", "image/cat.jpg");
  document.getElementById("cat").appendChild(img);
}

//rock scisssor paper
var elementArray = {
  rock: document.getElementById("rock").src,
  paper: document.getElementById("paper").src,
  scissor: document.getElementById("scissor").src,
};

function rpsgame(yourChoice) {
  bot = randomChoice();
  human = yourChoice.id;

  if (bot == human) {
    result = "Tie";
  } else if (human == "rock" && bot == "scissor") {
    result = "You Win!";
  } else if (human == "scissor" && bot == "paper") {
    result = "You Win!";
  } else if (human == "paper" && bot == "rock") {
    result = "You Win!";
  } else {
    result = "You lost!";
  }

  rpsFrontEnd(bot, human, result);
}

function rpsFrontEnd(botChoice, humanChoice, finalMessage) {
  console.log("human:", humanChoice);
  console.log("bot:", botChoice);
  console.log("message:", finalMessage);

  //removing all pictures
  document.getElementById("scissor").remove();
  document.getElementById("paper").remove();
  document.getElementById("rock").remove();

  var humanDiv = document.createElement("div");
  humanDiv.id = "human";
  var botDiv = document.createElement("div");
  botDiv.id = "bot";
  var messageDiv = document.createElement("div");
  messageDiv.id = "message";

  humanDiv.innerHTML = `<img src="${elementArray[humanChoice]}">`;
  botDiv.innerHTML = `<img src="${elementArray[botChoice]}">`;
  messageDiv.innerHTML = `<h3>${finalMessage}</h3>`;

  document.getElementById("image-items").appendChild(humanDiv);
  document.getElementById("image-items").appendChild(messageDiv);
  document.getElementById("image-items").appendChild(botDiv);
}

function randomChoice() {
  let rnum = Math.floor(Math.random() * 9);
  switch (rnum) {
    case 0:
    case 7:
    case 4:
      result = "rock";
      break;
    case 1:
    case 3:
    case 8:
      result = "paper";
      break;
    case 2:
    case 5:
    case 6:
      result = "scissor";
      break;
  }
  return result;
}
