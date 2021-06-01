let defaulftArr = [];
const topic = document.getElementById("topic");
const question = document.getElementById("question");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
const answer = document.getElementById("answer-create-quiz");
function addQues() {
  if (
    question.value === "" ||
    choiceA.value === "" ||
    choiceB.value === "" ||
    choiceC.value === "" ||
    choiceD.value === "" ||
    answer.value === ""
  ) {
    alert("Please fill in the require info");
  } else {
    let answerUppercase = answer.value.toUpperCase();
    newObj = {
      question: question.value,
      choice: [choiceA.value, choiceB.value, choiceC.value, choiceD.value],
      answer: answerUppercase,
    };
    defaulftArr.push(newObj);
    console.log(defaulftArr);
    let quesList = document.getElementById("question-list");
    quesList.insertAdjacentHTML(
      "beforeend",
      `<tr>
    <th scope="row">${question.value}</th>
    <td>${choiceA.value}</td>
    <td>${choiceB.value}</td>
    <td>${choiceC.value}</td>
    <td>${choiceD.value}</td>
    <td>${answerUppercase}</td>
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
  } else if (defaulftArr.length === 0) {
    alert("There is no quiz");
  } else {
    let topicName = topic.value;
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
  }
}
let homeContainer = document.getElementById("home");
let creatQuizContainer = document.getElementById("create-quiz");

function showHome() {
  homeContainer.removeAttribute("hidden");
  creatQuizContainer.setAttribute("hidden",true);
}
function showCreateQuiz() {
  homeContainer.setAttribute("hidden", true)
  creatQuizContainer.removeAttribute("hidden");
}
