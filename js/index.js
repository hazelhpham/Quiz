let topicChosen = [];
let allQuestions = [];


let homeContainer = document.getElementById("home");
let availableQuizzes = document.getElementById("topic-quizzes-hide");
let emptyQuizzes = document.getElementById("empty-quiz");
let createQuizContainer = document.getElementById("create-quiz");
let availableUQ = document.getElementById("available-user-quizzes");
availableUQ.setAttribute("hidden", true);
document.getElementById("create-quiz").style.display = "none";

//variables for testQuiz
let testQuiz = document.getElementById("testQuiz");
let indexSelectedQuestions = 0; 
let indexChoices = 1; 
let indexAnswer = 2;
let countQuiz = 1; 
let userAns = " ";


//variables for single test
let indexQuestion = 0; //get the index of the questions
let count = 0; //both


//===========================================================================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
//===========================================================================

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


const submitTestQuiz = () => {
  const checkboxes = document.querySelectorAll(
    'input[name="topicChoice"]:checked'
  );

  SIZE = checkboxes.length * 5;
 
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
    } else if (checkbox.value === topicName) {
      for (let i = 0; i < userQuiz.topicName.length; i++) {
        allQuestions.push(userQuiz.topicName[i].question);
        allQuestions.push(userQuiz.topicName[i].choices);
        allQuestions.push(userQuiz.topicName[i].answer);
      }
    }
  });
  checkboxes.forEach((checkbox) => {
    document.getElementById(checkbox.id).checked = false;
  });
  if(checkboxes.length ===0) alert("Please choose a topic!");
  else{
  let displayQuiz = testQuiz.style.display;
  if (displayQuiz === "none") {
    testQuiz.style.display = "block";
  } else {
    testQuiz.style.display = "block";
    availableQuizzes.style.display = "none";
    emptyQuizzes.style.display = "none";
  }
  showSelectedQuiz();
  document.getElementById("countQuestion").innerHTML =
    "User is answering the 1st out of " + SIZE + " number of quizzes";
}
}


//===========================================================================
const showQuiz = () => {
  document.getElementById("question").innerHTML =
    "Question: " + myQuiz[indexQuestion].question;
  document.getElementById("choiceA").innerHTML =
    "A. " + myQuiz[indexQuestion].choices[0];
  document.getElementById("choiceB").innerHTML =
    "B. " + myQuiz[indexQuestion].choices[1];
  document.getElementById("choiceC").innerHTML =
    "C. " + myQuiz[indexQuestion].choices[2];
  document.getElementById("choiceD").innerHTML =
    "D. " + myQuiz[indexQuestion].choices[3];
}

//===========================================================================

const showSelectedQuiz = ()=> {
  document.getElementById("question").innerHTML =
    allQuestions[indexSelectedQuestions];
  let str = allQuestions[indexChoices];
  for (let i in str) {
    document.getElementById("choiceA").innerHTML = "A. " + str[0] + " \n";
    document.getElementById("choiceB").innerHTML = "B. " + str[1] + " \n";
    document.getElementById("choiceC").innerHTML = "C. " + str[2] + " \n";
    document.getElementById("choiceD").innerHTML = "D. " + str[3] + " \n";
  }
};

//===========================================================================
const submitQuiz = () => {
  let userAns = document.getElementById("answer").value.toUpperCase();
  if (userAns === allQuestions[indexAnswer]) {
    console.log(
      "Program Answer : " +
        allQuestions[indexAnswer] +
        " vs User Answer : " +
        userAns
    );
    console.log("The current score of user : " + count);
    alert("Correct!");
    count++;
  } else {
    console.log(
      "Program Answer : " +
        allQuestions[indexAnswer] +
        " vs User Answer :" +
        userAns
    );
    console.log("The current score of user : " + count);
    alert("Incorrect!");
  }
  userAns = "";
}


showSelectedQuiz();

document.getElementById("submit").onclick = ()=> {
  submitQuiz();
  document.getElementById("answer").value = "";
  if (countQuiz === SIZE) {
    alert("You answer " + count + " questions correct.");
    let displayQuiz = testQuiz.style.display;
    if (displayQuiz === "block") {
      testQuiz.style.display = "none";
      availableQuizzes.style.display = "block";
      emptyQuizzes.style.display = "block";
    }
    console.log("User finishes the quiz!");
  }
  else if (countQuiz < SIZE) {
    indexSelectedQuestions += 3;
    indexChoices += 3;
    indexAnswer += 3;

    showSelectedQuiz();
    console.log("---------------------------");
    document.getElementById("countQuestion").innerHTML =
      "User is answering the " +
      (countQuiz + 1) +
      "th out of " +
      SIZE +
      " number of quizzes";
  }
  countQuiz++;
};

//===========================================================================
document.getElementById("next").onclick = () => {
  nextFunction();
};
const nextButton = document.getElementById("next");

//===========================================================================
function nextFunction() {
  // for single Quiz
  /* 
  indexQuestion++;
  showQuiz();
  if (indexQuestion === myQuiz.length - 1) {
    alert("You answer " + count + " questions correct.");
  }
  */
  alert("The correct answer for this answer is: " + allQuestions[indexAnswer]);
  indexSelectedQuestions += 3;
  indexChoices += 3;
  indexAnswer += 3;
  document.getElementById("countQuestion").innerHTML =
    "User is answering the " +
    (countQuiz + 1) +
    "th out of " +
    SIZE +
    " number of quizzes";
  showSelectedQuiz();
  if (countQuiz === SIZE) {
    alert("You answer " + count + " questions correct.");
    let displayQuiz = testQuiz.style.display;
    if (displayQuiz === "block") {
      testQuiz.style.display = "none";
      availableQuizzes.style.display = "block";
      emptyQuizzes.style.display = "block";
    }
    console.log("User finishes the quiz!");
  }

  countQuiz++;
}

//-------------------END TEST QUIZ JAVASCRIPT FILE---------------------

//--------------------ADD QUIZ JAVASCRIPT FILE--------------------------------
let defaulftArr = [];
const topic = document.getElementById("topic-CQ");
const question = document.getElementById("question-CQ");
const choiceA = document.getElementById("choiceA-CQ");
const choiceB = document.getElementById("choiceB-CQ");
const choiceC = document.getElementById("choiceC-CQ");
const choiceD = document.getElementById("choiceD-CQ");
const answer = document.getElementById("answer-create-quiz");
const quesList = document.getElementById("question-list");
let topicName = topic.value;
let newObj = {};
function addQues() {
  if (
    topic.value === "" ||
    question.value === "" ||
    choiceA.value === "" ||
    choiceB.value === "" ||
    choiceC.value === "" ||
    choiceD.value === "" ||
    answer.value === ""
  ) {
    alert("Please fill in the require info");
  } else {
    topic.value = {
      question: question.value,
      choices: [choiceA.value, choiceB.value, choiceC.value, choiceD.value],
      answer: answer.value.toUpperCase(),
    };

    defaulftArr.push(topic.value);
    console.log(defaulftArr);

    quesList.insertAdjacentHTML(
      "beforeend",
      `<tr>
    <th scope="row">${question.value}</th>
    <td>${choiceA.value}</td>
    <td>${choiceB.value}</td>
    <td>${choiceC.value}</td>
    <td>${choiceD.value}</td>
    <td>${answer.value.toUpperCase()}</td>
    </tr>`
    );
    question.value = "";
    choiceA.value = "";
    choiceB.value = "";
    choiceC.value = "";
    choiceD.value = "";
    answer.value = "";
  }
}
function addQuiz() {
  if (topic.value === "") {
    alert("Please enter the topic of the set of quiz");
  } else if (defaulftArr.length < 1) {
    alert("There must be at least 5 questions");
  } else {
    userQuiz.topicName = defaulftArr;
    alert("Create new quiz successfully");
    console.log(userQuiz);
    topic.value = "";
    question.value = "";
    choiceA.value = "";
    choiceB.value = "";
    choiceC.value = "";
    choiceD.value = "";
    answer.value = "";
    emptyQuiz = document.getElementById("empty-quiz");
    emptyQuiz.setAttribute("hidden", true);

    let availableUQ = document.getElementById("available-user-quizzes");
    availableUQ.insertAdjacentHTML(
      "beforeend",
      `<div class="col-sm-3 quiz_card"> <input
    type="checkbox"
    id=""
    name="topicChoice"
    value="${topicName}"
    class="checkbox-inline topicChoice"
  />
  ${topicName} </div>`
    );
    showHome();
    availableUQ.removeAttribute("hidden");
    quesList.innerHTML = "";
  }
}

//-------------------- END ADD QUIZ JAVASCRIPT FILE--------------------------------

const showHome = () => {
  document.getElementById("topic-quizzes-hide").style.display = "block";
  document.getElementById("testQuiz").style.display = "none";
  document.getElementById("create-quiz").style.display = "hidden";
  document.getElementById("user-quizzes").style.display = "block";
  document.getElementById("search-file").setAttribute("hidden", true);
};
const showCreateQuiz = () => {
  document.getElementById("topic-quizzes-hide").style.display = "none";
  document.getElementById("user-quizzes").style.display = "none";
  document.getElementById("create-quiz").style.display = "block";
};
