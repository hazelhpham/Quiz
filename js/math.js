let choices = [];
let nameOfChoices = ["A", "B", "C", "D"];
const listOfQuiz = {
  math: [
    {
      question: "What is the product of 0 and 1 ? ",
      choices: [0, 100, 3, 9],
      answer: "A",
    },
    {
      question: "The least number of 2 digits is ? ",
      choices: [99, 11, 90, 10],
      answer: "D",
    },
    {
      question: "what is the biggest number ? ",
      choices: [9999999, -1000000, 3, 4383],
      answer: "A",
    },
    {
      question: "what is the smallest number ? ",
      choices: [-9, -11, 0, 100],
      answer: "B",
    },
    {
      question:
        "There are 3 candies in the pocket. Andie eats 2 candies. How many candies are there left in the pocket?  ",
      choices: [1, 0, 5, 3],
      answer: "A",
    },
  ],
};


let numQuestions = [1, 2, 3, 4, 5];
let numChoices = listOfQuiz.math[0].choices.length;

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
}

//-------------------------end randomize question---------------------------


