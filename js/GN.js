//DATABASE OF GENERAL KNOWLEDGE 
const listOfQuiz = {
  general_knowledge: [
    {
      question: "Who invented electricity?",
      choices: [
        "Albert Einstein",
        "Steve Jobs",
        "Thomas Edison",
        "Marie Curie",
      ],
      answer: "C",
    },
    {
      question: "When is Vietnamese's Independence Day? ",
      choices: ["September 02th", "October 31st", "May 19th", "March 8th"],
      answer: "A",
    },
    {
      question: "How many states are there in the United States? ",
      choices: ["52", "50", "45", "60"],
      answer: "B",
    },
    {
      question: "Who is the first black president of the United States? ",
      choices: ["John Hanson", "Barack Obama", "Nelson Mandela", "Snoop Dog"],
      answer: "A",
    },
    {
      question: "Who is the first person to travel to the moon? ",
      choices: [
        "Neil Armstrong",
        "Donald Trump",
        "Pham Tuan",
        "Abraham Lincoln",
      ],
      answer: "A",
    },
  ],
};


//-----------------------------------------------END DATABASE --------------------------------------------------------------


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
