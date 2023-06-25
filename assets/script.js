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

// Adding event listener to button
mainButton.addEventListener("click", startCountdown);

function startCountdown() {
  mainButton.disabled = true;
  var secondsleft = 20;
  countdownInterval = setInterval(() => {
    secondsleft--;
    timeEl.textContent = secondsleft;

    if (secondsleft <= 0) {
      clearInterval(countdownInterval);
      mainButton.disabled = false;
    }
  }, 1000);
}

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
