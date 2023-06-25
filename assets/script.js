// Question Bank
Q1 = {
  Question: "test",
  Wrong1: "Wrong1",
  Wrong2: "Wrong2",
  Wrong3: "Wrong3",
  Right: "Right!",
};
Q2 = {
  Question: "test",
  Wrong1: "Wrong1",
  Wrong2: "Wrong2",
  Wrong3: "Wrong3",
  Right: "Right!",
};
Q3 = {
  Question: "test",
  Wrong1: "Wrong1",
  Wrong2: "Wrong2",
  Wrong3: "Wrong3",
  Right: "Right!",
};

// Grabbering Timer from Nav and Setting Interval
var timeEl = document.querySelector(".time");
var secondsLeft = 100;

var mainButton = document.querySelector(".btn-main");

setTime = function () {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
  });
};

mainButton.addEventListener("click", setTime());

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
