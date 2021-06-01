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
    geography: [
      {
        question: "What is the capital of Australia ?",
        choices: ["Canberra", "Sydney", "Melbourne", "London"],
        answer: "A",
      },
      {
        question: "What is the largest continent? ",
        choices: ["Asia", "Europe", "Africa", "Australia"],
        answer: "A",
      },
      {
        question: "Which is the second largest country? ",
        choices: ["Australia", "Russia", "Canada", "China"],
        answer: "C",
      },
      {
        question: "Which country has the smallest population? ",
        choices: ["Vietnam", "Singapore", "Vatican", "Bangladesh"],
        answer: "C",
      },
      {
        question: "Berlin is the capital of which country?  ",
        choices: ["France", "Singapore", "Italy", "Germany"],
        answer: "D",
      },
    ],
    music: [
      {
        question: "Which music video had the most views on youtube?  ",
        choices: ["Sugar", "See you again", "Shape of you", "Despacito"],
        answer: "D",
      },
      {
        question: "Reginald Kenneth Dwight is better known by what name?",
        choices: ["Beethoven", "Elton John", "Justin Bieber", "Billy Ocean"],
        answer: "B",
      },
      {
        question:
          "Björn Again is a tribute band for which world-famous pop group?  ",
        choices: ["Maroon 5", "The Beatles", "Backstreet Boys", "ABBA"],
        answer: "D",
      },
      {
        question:
          "Which former One Direction member released 'Watermelon Sugar' and 'Adore You'?  ",
        choices: ["Zayn Malik", "Harry Styles", "Liam Payne", "Niall Horan"],
        answer: "B",
      },
      {
        question:
          "Which female artist released the single 'Rolling in the Deep'?  ",
        choices: ["Ariana Grande", "Katy Perry", "Adele", "Billie Eilish"],
        answer: "C",
      },
    ],
    films: [
      {
        question: "The main actor in Titanic is: ",
        choices: [
          "Leonardo Dicaprio",
          "Brad Pitt",
          "Adam Levine",
          "Justin Bieber",
        ],
        answer: "A",
      },
      {
        question: "How many chapters does Harry Potter film have? ",
        choices: ["1", "3", "7", "8"],
        answer: "C",
      },
      {
        question: "In the movie Home Alone, where did Kevin get lost in?",
        choices: ["New York", "New Jersey", "Miami", "Chicago"],
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
        choices: ["Voldemort", "Dumbledore", "Draco Malfoy", "Hagrid"],
        answer: "A",
      },
    ],
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
  const userQuiz = {}