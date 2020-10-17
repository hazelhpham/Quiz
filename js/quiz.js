
//function to shuffle the questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate random number
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


const getQuiz = (topic) => {
  const randomQuestion = shuffleArray(listOfQuiz[topic]);
  return randomQuestion;
};

let count = 0;

const myQuiz = getQuiz("general_knowledge");
let indexQuestion = 0;


function showQuiz() {
  document.getElementById("question").innerHTML = "Question: " + myQuiz[indexQuestion].question;
  document.getElementById("choiceA").innerHTML = "A. " + myQuiz[indexQuestion].choices[0];
  document.getElementById("choiceB").innerHTML = "B. " +myQuiz[indexQuestion].choices[1];
  document.getElementById("choiceC").innerHTML = "C. " +myQuiz[indexQuestion].choices[2];
  document.getElementById("choiceD").innerHTML = "D. " +myQuiz[indexQuestion].choices[3];
}

function submitQuiz() {
  //get the answer from user
  let userAns = document.getElementById("answer");
  //compare the answer of user and the answer of ther quiz
  //if user answer correctly => alert and add up the score
  if (userAns.value === myQuiz[indexQuestion].answer) {
    alert("Correct!");
    count++;
  //else alert incorrect. 
  } else {
    alert("Incorrect!");
  }
  userAns.value === " ";
  
}




showQuiz();
//when user clicks submit button => check if answer is correct or not
//if there are still more questions => continue showing more questions
//else stop the game and show the result 
document.getElementById("submit").onclick = function () {
  submitQuiz();
  if(indexQuestion === (myQuiz.length-1)){
    alert("You answer " + count + " questions correct.");
  }
  else if(indexQuestion  < (myQuiz.length-1)){
    indexQuestion ++;
    showQuiz();
  }
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
  indexQuestion++;
  showQuiz();
  if(indexQuestion === (myQuiz.length-1)){
    alert("You answer " + count + " questions correct.");
  }
}
