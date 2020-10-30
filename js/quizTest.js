/*bugs :
  - userAns chua ve blank khi submit question
  - chua display topics
*/
let topicChosen = [];
let allQuestions = [];

//variables for testQuiz
let testQuiz = document.getElementById("testQuiz"); //testQuiz
let indexSelectedQuestions = 0; //testQuiz
let indexChoices = 1; //testQuiz
let indexAnswer = 2; //testQuiz. set as 2 because the answer is always placed at index 2,
let countQuiz = 1; //for testQuiz.
let userAns = " ";
//variables for single test
let indexQuestion = 0; //get the index of the questions
let count = 0; //both


//FUNCTION FOR SINGLE QUIZ!
//shuffle the quiz topics before letting user finish choosing the topics for Quizzes
const getQuiz = (topic) => {
  const randomQuestion = shuffleArray(listOfQuiz[topic]);
  return randomQuestion;
};
const topicQuiz = [
  "math",
  "geography",
  "music",
  "films",
  "sports",
  "general_knowledge",
];
let myQuiz = [];
for (let i = 0; i < 6; i++) {
  myQuiz[i] = getQuiz(topicQuiz[i]);
}

let SIZE = 0;

//FUNCTION FOR QUIZ TEST!
//when user hits the submitQuiz button,
// 1) pull out all the questions of topics selected by user => put into a big array
//    called : allQuestions => shuffle it by the shuffleArray function
// 2) the quiz content will be displayed : 1 question, 4 choices, and 1 box for user to
//    enter answers

function submitTestQuiz() {
  const checkboxes = document.querySelectorAll(
    'input[name="topicChoice"]:checked'
  );
  
  SIZE = checkboxes.length * 5; // get the number of questions that user will have to answer

  checkboxes.forEach((checkbox) => {
    if (checkbox.value === "math") {
      for (let i = 0; i < listOfQuiz.math.length; i++) {
        allQuestions.push(listOfQuiz.math[i].question);
        allQuestions.push(listOfQuiz.math[i].choices);
        allQuestions.push(listOfQuiz.math[i].answer);
      }
    } else if (checkbox.value === "music") {
      for (let i = 0; i < listOfQuiz.music.length; i++) {
        allQuestions.push(listOfQuiz.music[i].question);
        allQuestions.push(listOfQuiz.music[i].choices);
        allQuestions.push(listOfQuiz.music[i].answer);
      }
    } else if (checkbox.value === "films") {
      for (let i = 0; i < listOfQuiz.films.length; i++) {
        allQuestions.push(listOfQuiz.films[i].question);
        allQuestions.push(listOfQuiz.films[i].choices);
        allQuestions.push(listOfQuiz.films[i].answer);
      }
    } else if (checkbox.value === "sports") {
      for (let i = 0; i < listOfQuiz.sports.length; i++) {
        allQuestions.push(listOfQuiz.sports[i].question);
        allQuestions.push(listOfQuiz.sports[i].choices);
        allQuestions.push(listOfQuiz.sports[i].answer);
      }
    } else if (checkbox.value === "geography") {
      for (let i = 0; i < listOfQuiz.geography.length; i++) {
        allQuestions.push(listOfQuiz.geography[i].question);
        allQuestions.push(listOfQuiz.geography[i].choices);
        allQuestions.push(listOfQuiz.geography[i].answer);
      }
    } else if (checkbox.value === "general_knowledge") {
      for (let i = 0; i < listOfQuiz.general_knowledge.length; i++) {
        allQuestions.push(listOfQuiz.general_knowledge[i].question);
        allQuestions.push(listOfQuiz.general_knowledge[i].choices);
        allQuestions.push(listOfQuiz.general_knowledge[i].answer);
      }
    }
  });

  //------------------------------------

  let displayQuiz = testQuiz.style.display;

  if (displayQuiz == "none") {
    // testQuiz is visible. hide it
    testQuiz.style.display = "block";
  } else {
    // testQuiz is hidden. Show it
    testQuiz.style.display = "block";
  }
  showSelectedQuiz();

  document.getElementById("countQuestion").innerHTML = (

    "User is answering the 1st out of " + SIZE + " number of quizzes"
  );
}

//SINGLE QUIZ
//function to show quiz : a question then 4 options
function showQuiz() {

  document.getElementById(
    "question"
  ).innerHTML = "Question: " + myQuiz[indexQuestion].question;
  document.getElementById("choiceA").innerHTML =
    "A. " + myQuiz[indexQuestion].choices[0];
  document.getElementById("choiceB").innerHTML =
    "B. " + myQuiz[indexQuestion].choices[1];
  document.getElementById("choiceC").innerHTML =
    "C. " + myQuiz[indexQuestion].choices[2];
  document.getElementById("choiceD").innerHTML =
    "D. " + myQuiz[indexQuestion].choices[3];
}

//TEST QUIZ
//display a question
//then show other options
function showSelectedQuiz() {
  document.getElementById("question").innerHTML =
    "Question: " + allQuestions[indexSelectedQuestions];
  //the choices is a string => use for loop to loop through the string of choices
  let str = allQuestions[indexChoices];
  for (let i in str) {
    document.getElementById("choiceA").innerHTML = "A. " + str[0] + " \n";
    document.getElementById("choiceB").innerHTML = "B. " + str[1] + " \n";
    document.getElementById("choiceC").innerHTML = "C. " + str[2] + " \n";
    document.getElementById("choiceD").innerHTML = "D. " + str[3] + " \n";
  }

}

//FUNCTION FOR BOTH !
//this function will run after typing the answer for the question => user hits the submit button
//1) converts the user's answer to uppercase if its lowercase.
//2)compare the user's answer and the answer
//  if: correct => count++ the result
//  alert that user's answer is correct
//  else: incorrect
function submitQuiz() {
  //get the answer from user
  let userAns = document.getElementById("answer").value;
  userAns.toUpperCase();
  //compare the answer of user and the answer of ther quiz
  //if user answer correctly => alert and add up the score
  //if (userAns === myQuiz[indexQuestion].answer) { //for single Quiz
  if (userAns === allQuestions[indexAnswer]) {
    //for testQuiz
    console.log("Program Answer : " +  allQuestions[indexAnswer] + " vs User Answer : " + userAns);
    console.log("The current score of user : " +  count);
    alert("Correct!");
    count++;
  } else {
    console.log("Program Answer : " +  allQuestions[indexAnswer] + " vs User Answer :" + userAns);
    console.log("The current score of user : " +  count);
    alert("Incorrect!");
  }
}

//showQuiz(); //for html of single Quiz

showSelectedQuiz(); 

//when user clicks submit button => check if answer is correct or not
//if there are still more questions => continue showing more questions
//else stop the game and show the result
document.getElementById("submit").onclick = function () {
  submitQuiz();

  //if(indexQuestion === (myQuiz.length-1)){
  if (countQuiz === SIZE) {
    alert("You answer " + count + " questions correct.");

    let displayQuiz = testQuiz.style.display;
    if (displayQuiz == "block") {
      testQuiz.style.display = "none";
    }
    console.log("User finishes the quiz!");
    
  }
  //for a single quiz

  /*else if(indexQuestion  < (myQuiz.length-1)){
    showQuiz(); 
  */

  else if (countQuiz < SIZE) {
    indexSelectedQuestions += 3;
    indexChoices += 3;
    indexAnswer += 3;
    
    showSelectedQuiz();
    console.log("---------------------------");
    document.getElementById("countQuestion").innerHTML = (
      "User is answering the " +
        (countQuiz + 1) +
        "th out of " +
        SIZE +
        " number of quizzes"
    );
  }
  countQuiz++;
};

//when user clicks next button => runs the nextFunction
document.getElementById("next").onclick = () => {
  nextFunction();
};
const nextButton = document.getElementById("next");

//when user clicks next button => the index of Question will be incremeneted by 1
//show quiz with the incremented index
//if there are no more questions => alert the result
function nextFunction() {

  // for single Quiz 
  /* 
  indexQuestion++;
  showQuiz();
  if (indexQuestion === myQuiz.length - 1) {
    alert("You answer " + count + " questions correct.");
  }
  */

  //for test Quiz 

  indexSelectedQuestions += 3;
  indexChoices += 3;
  indexAnswer += 3;
  showSelectedQuiz();
  if (countQuiz === SIZE) {
    alert("You answer " + count + " questions correct.");
  // testQuiz is visible. hide it
    let displayQuiz = testQuiz.style.display;
    if (displayQuiz == "block") {
      testQuiz.style.display = "none";
    }
    console.log("User finishes the quiz!");
  }

  countQuiz++;
}
