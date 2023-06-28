// Question Bank
var questions = [
  {
    numberQuestion: 1,
    question: "What does a loop do?",
    answer: "iterates over something",
    otherResponse: ["Hula Loop", "Da Loop", "Some Other Thing"],
  },
  {
    numberQuestion: 2,
    question: "What is an array",
    answer: "list of values",
    otherResponse: ["type of ray gun", "one value", "Some Other Thing"],
  },
  {
    numberQuestion: 3,
    question: "what is a Web API?",
    answer: "APIs created by the browser",
    otherResponse: ["Spider Mans Acronym", "Charlottes nickname", "Some Other Thing"],
  },
  {
    numberQuestion: 4,
    question: "keys are matched to what?",
    answer: "value",
    otherResponse: ["lock", "scroll", "Some Other Thing"],
  },
  {
    numberQuestion: 5,
    question: "What does console log do?",
    answer: "logs values to the console in the browser",
    otherResponse: ["multiplies", "Divides", "Some Other Thing"],
  },
];

// Grabbering Timer from Nav and Setting Seconds Left
var timeEl = document.querySelector(".time");
var mainButton = document.querySelector(".btn-main");
var questionIndex = 0;
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answer");
//Stops Timer, gets intitals and creates variable with seconds left which equals high score
function saveGame() {
  clearInterval(countdownInterval);
  var initials = prompt("What are your intials");
  var currentHighScore = secondsleft;
  //Caputuring outputs for game
  var highScores = {
    highScore: currentHighScore,
    user: initials,
  };

  localStorage.setItem("highscores", JSON.stringify(highScores));
}

// Adding event listener to button
mainButton.addEventListener("click", startQuiz);
//Display Question from array and object > taking questioninex as arg
function displayQuestion(index) {
  //Checks to see if we continue with questions, starts save game function and exits out of function
  if (secondsleft <= 0 || questionIndex === questions.length) {
    saveGame();
    return;
  }
  var question = questions[index];
  var questionDiv = document.querySelector(".question");

  //Clearing questionDiv o content/ creting a span and adding it to Div
  questionDiv.innerHTML = "";
  var span = document.createElement("span");
  span.innerHTML = question.question;
  questionDiv.appendChild(span);
  var ul = document.createElement("ul");
  //Concat taking all keys:value paids from question 1 object into single array
  var allChoices = [question.answer].concat(question.otherResponse);

  // Randomize the order of the choices
  allChoices = allChoices.sort(() => Math.random() - 0.5);
  //creating a loop that creates a li and button from each index in all choices
  allChoices.forEach(function (choice) {
    var li = document.createElement("li");
    // li.innerHTML = choice;
    var button = document.createElement("button");
    // Set the button's text
    button.innerHTML = choice;
    answerEl.textContent = "";
    button.onclick = function () {
      //Check to see if quesiton is right or wrong basd on key
      if (choice === question.answer) {
        answerEl.textContent = "RIGHT!";
        questionIndex++;
        displayQuestion(questionIndex);
      } else {
        answerEl.textContent = "Wrong!";
        secondsleft = secondsleft - 5;
      }
    };
    //appending button element as child of li
    li.appendChild(button);
    //appending li element as child of ul
    ul.appendChild(li);
  });
  //when loop complete append the whole ul to div
  questionDiv.appendChild(ul);
}
// Start the timer in the upper right hand corner
var secondsleft = 100;
function startTimer() {
  mainButton.disabled = true;
  countdownInterval = setInterval(() => {
    secondsleft--;
    timeEl.textContent = secondsleft;
    //Stops Timer
    if (secondsleft <= 0) {
      clearInterval(countdownInterval);
      mainButton.disabled = false;
    }
  }, 1000);
}

function startQuiz() {
  startTimer();
  displayQuestion(questionIndex);
}

//if seconds left is more then 0 || no questions left => clear interval
//Track wrong inputs
//set score via seconds left - wrong answers

// Psuedo Steps
//Create Nav Element that has High Scores Link and Timer Showing
//H1 Element that has Information about Game and Button Underneath
// Add Click Event to Button
// Click Event, Starts Timer
//Change H1 Element to Question
//Create 4 Buttons that change in conjuction with H1 Element
//If correct button is selected -> Display Correct and move to next question
//If Wrong button -> add to on going counter to track minus -> display Wrong
//For Both Change to new questions
//Once all questions are cycled through
//Take time left - missed questions and display score
//Log to local storage
//Update to High Score Page

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
