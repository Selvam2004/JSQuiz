const questions = [
  {
    question: "1.Javascript is an _______ language?",
    answers: [
      { text: "object-oriented", correct: true },
      { text: "object-based", correct: false },
      { text: "procedural", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "2.Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "both A and B", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "3.Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      { text: "getElementbyId", correct: false },
      { text: "getElementbyclassname", correct: false },
      { text: "Both A and b", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "4.Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: [
      { text: "getIndex()", correct: false },
      { text: "location()", correct: false },
      { text: "indexOf()", correct: true },
      { text: " None of the above.", correct: false },
    ],
  },
  {
    question: "5.Which built-in method sorts the elements of an array?",
    answers: [
      { text: "changeOrder(order)", correct: false },
      { text: "order()", correct: false },
      { text: "sort()", correct: true },
      { text: "None of the above.", correct: false },
    ],
  },
  {
    question:
      "6.Which of the following function of String object returns the character at the specified index?",
    answers: [
      { text: "charAt()", correct: true },
      { text: "charCodeAt()", correct: false },
      { text: "concat()", correct: false },
      { text: "indexOf()", correct: false },
    ],
  },
  {
    question:
      "7.Which of the following function of String object is used to match a regular expression against a string?",
    answers: [
      { text: "concat()", correct: false },
      { text: "match()", correct: true },
      { text: "search()", correct: false },
      { text: "replace()", correct: false },
    ],
  },
  {
    question:
      "8.Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
    answers: [
      { text: "toLocaleLowerCase()", correct: true },
      { text: "toLowerCase()", correct: false },
      { text: "toString()", correct: false },
      { text: "substring()", correct: false },
    ],
  },
  {
    question:
      "9. Which of the following function of String object creates an HTML hypertext link that requests another URL?",
    answers: [
      { text: "link()", correct: true },
      { text: "sub()", correct: false },
      { text: "sup()", correct: false },
      { text: "small()", correct: false },
    ],
  },
  {
    question:
      "10.Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
    answers: [
      { text: "indexOf()", correct: false },
      { text: "join()", correct: false },
      { text: "lastIndexOf()", correct: true },
      { text: "map()", correct: false },
    ],
  },
];
const quesbtn = document.getElementById("ques");
const answerbtn = document.getElementById("ans");
const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");

let crqindex = 0;
let score = 0;
var c = 60;
function start() {
  crqindex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  reset();
  let crntq = questions[crqindex];
  quesbtn.innerHTML = crntq.question;
  crntq.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.classList.add("w-100");
    button.classList.add("m-2");
    button.classList.add("text-center");

    button.classList.add("text-start");
    answerbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}
setInterval(time, 1000);

function time() {
  if (c > 0) {
    document.getElementById("timer").innerHTML = c--;
  } else {
    c = 60;
    nextquestion();
  }
}
function selectAnswer(e) {
  const selectedbtn = e.target;
  const isCorrect = selectedbtn.dataset.correct === "true";
  if (isCorrect) {
    selectedbtn.classList.add("btn");
    selectedbtn.classList.add("btn-primary");
    score++;
  } else {
    selectedbtn.classList.add("btn");
    selectedbtn.classList.add("btn-danger");
  }
  Array.from(answerbtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("btn");
      button.classList.add("btn-primary");
    }
    button.disabled = true;
  });
}
function reset() {
  while (answerbtn.firstChild) {
    answerbtn.removeChild(answerbtn.firstChild);
  }
}
nextbtn.addEventListener("click", () => {
  if (crqindex < questions.length) {
    nextquestion();
  } else {
    document.getElementById("dp").style.display = "block";
    start();
  }
});
function nextquestion() {
  crqindex++;
  if (crqindex < questions.length) {
    showQuestion();
    c = 60;
  } else {
    reset();
    document.getElementById("dp").style.display = "none";
    quesbtn.innerHTML = `You scored ${score}`;
    nextbtn.innerHTML = "Play Again";
  }
}

start();
