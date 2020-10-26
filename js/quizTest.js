//Allows users to choose one to many specific topics 
//Users then will do a cumulative tests including all chosen topics 

//whenever submit => all the choices are removed.
// submit => get the innerhtml of all the boxes checked
// => turn into lowercase => compare with the topic of the data quizzes
// => print out the quiz

//let topicOptions = document.getElementsByClassName("topicChoice");

let testQuiz = document.getElementById("testQuiz").innerHTML;
let topicChosen = [];



function submitTestQuiz() {
  const checkboxes = document.querySelectorAll(
    'input[name="topicChoice"]:checked'
  );

  let topicChosen = [];
  checkboxes.forEach((checkbox) => {
    topicChosen.push(checkbox.value);
  });

  console.log(topicChosen);

  for (let i = 0; i < topicChosen.length; i++) {
    testQuiz += showQuiz(listOfQuiz[topicChosen],i);
  }
}


function showQuiz(topicChosen,indexQuestion) {
    document.getElementById("question").innerHTML =
      "Question: " + listOfQuiz[topicChosen][indexQuestion].question;
    document.getElementById("choiceA").innerHTML =
      "A. " + topicChosen[indexQuestion].choices[0];
    document.getElementById("choiceB").innerHTML =
      "B. " + topicChosen[indexQuestion].choices[1];
    document.getElementById("choiceC").innerHTML =
      "C. " + topicChosen[indexQuestion].choices[2];
    document.getElementById("choiceD").innerHTML =
      "D. " + topicChosen[indexQuestion].choices[3];
  }
