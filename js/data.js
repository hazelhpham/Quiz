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
      choiceA: 1,
      choiceB: 0,
      choiceC: 5,
      choiceD: 3,
      answer: "A",
    },
  ],
  geography: [
    {
      question: "What is the capital of Australia ?",
      choiceA: "Canberra",
      choiceB: "Sydney",
      choiceC: "Melbourne",
      choiceD: "None of the above",
      answer: "A",
    },
    {
      question: "What is the largest continent? ",
      choiceA: "Asia",
      choiceB: "Europe",
      choiceC: "Africa",
      choiceD: "Australia",
      answer: "A",
    },
    {
      question: "Which is the second largest country? ",
      choiceA: "Australia",
      choiceB: "Russia",
      choiceC: "Canada",
      choiceD: "China",
      answer: "C",
    },
    {
      question: "Which country has the smallest population? ",
      choiceA: "Vietnam",
      choiceB: "Singapore",
      choiceC: "Vatican",
      choiceD: "Bangladesh",
      answer: "C",
    },
    {
      question: "Berlin is the capital of which country?  ",
      choiceA: "France",
      choiceB: "Singapore",
      choiceC: "Italy",
      choiceD: "Germany",
      answer: "D",
    },
  ],
  music: [
    {
      question: "Berlin is the capital of which country?  ",
      choiceA: "France",
      choiceB: "Singapore",
      choiceC: "Italy",
      choiceD: "Germany",
      answer: "D",
    },
    {
      question: "Berlin is the capital of which country?  ",
      choiceA: "France",
      choiceB: "Singapore",
      choiceC: "Italy",
      choiceD: "Germany",
      answer: "D",
    },
    {
      question: "Berlin is the capital of which country?  ",
      choiceA: "France",
      choiceB: "Singapore",
      choiceC: "Italy",
      choiceD: "Germany",
      answer: "D",
    },
    {
      question: "Berlin is the capital of which country?  ",
      choiceA: "France",
      choiceB: "Singapore",
      choiceC: "Italy",
      choiceD: "Germany",
      answer: "D",
    },
    {
      question: "Berlin is the capital of which country?  ",
      choiceA: "France",
      choiceB: "Singapore",
      choiceC: "Italy",
      choiceD: "Germany",
      answer: "D",
    },
  ],
  films: [
    {
      question: "The main actor in Titanic is: ",
      choiceA: "Leonardo DiCaprio",
      choiceB: "Brad Pitt",
      choiceC: "Adam Levine",
      choiceD: "Justin Bieber",
      answer: "A",
    },
    {
      question: "How many chapters does Harry Potter film have? ",
      choiceA: 1,
      choiceB: 3,
      choiceC: 7,
      choiceD: 8,
      answer: "C",
    },
    {
      question: "In the movie Home Alone, where did Kevin get lost in?",
      choiceA: "New York",
      choiceB: "New Jersey",
      choiceC: "Miami",
      choiceD: "Chicago",
      answer: "A",
    },
    {
      question: "How many parts does the movie series Fast and Furious have?",
      choiceA: 7,
      choiceB: 8,
      choiceC: 2,
      choiceD: 9,
      answer: "D",
    },
    {
      question: "Who is the villain in the movie Harry Potter?",
      choiceA: "Voldemort",
      choiceB: "Dumbledore",
      choiceC: "Draco Malfoy",
      choiceD: "Hagrid",
      answer: "A",
    },
  ],
  sports: [
    {
      question: "Who is the champion of World Cup 2018?",
      choiceA: "France",
      choiceB: "Brazil",
      choiceC: "Italy",
      choiceD: "Germany",
      answer: "A",
    },
    {
      question: "Which football club has the most fans in the world?",
      choiceA: "Barcelona",
      choiceB: "Liverpool",
      choiceC: "Manchester United",
      choiceD: "Real Madrid",
      answer: "C",
    },
    {
      question: "A famous basketball player has just passed away. Who is he?",
      choiceA: "Kobe Bryant",
      choiceB: "Michael Jordan",
      choiceC: "Lebron James",
      choiceD: "Stephen Curry",
      answer: "A",
    },
    {
      question: "What is the most popular sport in Vietnam?",
      choiceA: "Football",
      choiceB: "Basketball",
      choiceC: "Badminton",
      choiceD: "Tennis",
      answer: "A",
    },
    {
      question: "When is the first time Vietnam won a gold medal in Olympic? ",
      choiceA: 2008,
      choiceB: 2015,
      choiceC: 2016,
      choiceD: 2014,
      answer: "C",
    },
  ],
  general_knowledge: [
    {
      question: "Who invented electricity?",
      choiceA: "Albert Einstein",
      choiceB: "Steve Jobs",
      choiceC: "Thomas Edison",
      choiceD: "Marie Curie",
      answer: "C",
    },
    {
      question: "When is Vietnamese's Independence Day? ",
      choiceA: "September 02th",
      choiceB: "October 31st",
      choiceC: "May 19th",
      choiceD: "March 8th",
      answer: "A",
    },
    {
      question: "How many states are there in the United States? ",
      choiceA: "52",
      choiceB: "50",
      choiceC: "45",
      choiceD: "60",
      answer: "B",
    },
    {
      question: "Who is the first black president of the United States? ",
      choiceA: "John Hanson",
      choiceB: "Barack Obama",
      choiceC: "Nelson Mandela",
      choiceD: "Snoop Dog",
      answer: "A",
    },
    {
      question: "Who is the first person to travel to the moon? ",
      choiceA: "Neil Armstrong",
      choiceB: "Donald Trump",
      choiceC: "Pham Tuan",
      choiceD: "Abraham Lincoln",
      answer: "A",
    },
  ],
};

let numQuestions = listOfQuiz.math.length;
let numChoices = listOfQuiz.math[0].choices.length;
let randomIndex = Math.floor(Math.random() * numQuestions + 1);
for (let i = 0; i < numQuestions; i++) {
  console.log(listOfQuiz.math[i].question);
  for (let j = 0; j < numChoices; j++) {
    console.log(
      nameOfChoices[j] + ". " + listOfQuiz.math[i].choices[j]
    );
  }
  randomIndex = Math.floor(Math.random() * numQuestions + 1);
}
// for(let i = 0; i < listOfQuiz.math.length; i++){
//    let randomNumber = Math.floor((Math.random() * listOfQuiz.math.length) + 1);
//    console.log(listOfQuiz.math[randomNumber].question);
//    //console.log(listOfQuiz.math[randomNumber].question);
//    //let userAnswer = prompt("Enter ")

// }
