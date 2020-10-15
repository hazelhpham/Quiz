
const listOfQuiz = {
  sports: [
    {
      question: "Who is the champion of World Cup 2018?",
      choices: ["France", "Brazil", "Italy", "Germany"],
      answer: "A",
    },
    {
      question: "Which football club has the most fans in the world?",
      choices: ["Barcelona", "Liverpool", "Manchester United", "Real Madrid"],
      answer: "C",
    },
    {
      question: "A famous basketball player has just passed away. Who is he?",
      choices: [
        "Kobe Bryant",
        "Michael Jordan",
        "Lebron James",
        "Stephen Curry",
      ],
      answer: "A",
    },
    {
      question: "What is the most popular sport in Vietnam?",
      choices: ["Football", "Basketball", "Badminton", "Tennis"],
      answer: "A",
    },
    {
      question: "When is the first time Vietnam won a gold medal in Olympic? ",
      choices: ["2008", "2015", "2016", "2014"],
      answer: "C",
    },
  ],
};

//-------------------------------- END DATABASE OF SPORTS QUIZ --------------------------------------------------

let numQuestions = [1, 2, 3, 4, 5];
let numChoices = listOfQuiz.math[0].choices.length;

//function to shuffle the questions
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

let random = shuffleArray(numQuestions);

let nameOfChoices = ["A", "B", "C", "D"];
let count = 0;
document.getElementById("submit").onclick = function () {
  submitFunction();
};
for (let i = 0; i < numQuestions.length; i++) {
  let r = random[i];
  document.getElementById("question").innerHTML =
    listOfQuiz.math[r - 1].question;
  document.getElementById("choiceA").innerHTML =
    nameOfChoices[0] + ". " + listOfQuiz.math[r - 1].choices[0];
  document.getElementById("choiceB").innerHTML =
    nameOfChoices[1] + ". " + listOfQuiz.math[r - 1].choices[1];
  document.getElementById("choiceC").innerHTML =
    nameOfChoices[2] + ". " + listOfQuiz.math[r - 1].choices[2];
  document.getElementById("choiceD").innerHTML =
    nameOfChoices[3] + ". " + listOfQuiz.math[r - 1].choices[3];

  function submitFunction() {
    let userAns = document.getElementById("answer").value;
    let ans = listOfQuiz.math[r - 1].answer;
    if (userAns === ans ) {
      alert("Correct answer!");
      count = count + 1;
    } else {
      alert("Incorrect answer!");
    }
  }
}

