let defaulftArr = [];
const topic = document.getElementById("topic");
const question = document.getElementById("question");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
const answer = document.getElementById("answer");
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
    newObj = {
      question: question.value,
      choice: [choiceA.value, choiceB.value, choiceC.value, choiceD.value],
      answer: answer.value,
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
    <td>${answer.value}</td>
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
