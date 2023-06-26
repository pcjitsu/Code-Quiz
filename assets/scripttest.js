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

function displayQuestion(index) {
  var question = questions[index];
  var questionDiv = document.querySelector(".question");

  questionDiv.innerHTML = "";

  var span = document.createElement("span");

  span.innerHTML = question.question;

  questionDiv.appendChild(span);

  var ul = document.createElement("ul");

  var allChoices = [question.answer].concat(question.otherResponse);

  // Randomize the order of the choices
  allChoices = allChoices.sort(() => Math.random() - 0.5);

  allChoices.forEach(function (choice) {
    var li = document.createElement("li");
    // li.innerHTML = choice;

    var button = document.createElement("button");

    // Set the button's text
    button.innerHTML = choice;

    button.onclick = function () {
      if (choice === question.answer) {
        alert("You selected the correct answer: " + choice);
      } else {
        alert("You selected the wrong answer. The correct answer is: " + question.answer);
      }
    };

    li.appendChild(button);
    ul.appendChild(li);
  });

  questionDiv.appendChild(ul);
}

// Adding event listener to button
mainButton.addEventListener("click", startQuiz);

function startQuiz() {
  //Start the timer in the upper right hand corner
  function startTimer() {
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

  i = 0;

  displayQuestion(questionIndex);
  startTimer();
}
