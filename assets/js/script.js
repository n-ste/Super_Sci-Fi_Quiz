const nextButton = document.getElementById("btn-submit-answer");
let userScore = document.getElementById("score")
let questionNumberIndex = 1;

const myQuestionsArray = [{
        question: "In what year was the movie 'Star Wars' relased?",
        optionOne: '1979', correct: false,
        optionTwo: '1987', correct: false,
        optionThree: '1981', correct: false,
        optionFour: '1977', correct: true
    },
    {
        question: "In what year did Marvel Comics publish the first 'Fantastic Four' Comic?",
        optionOne: '1961', correct: true,
        optionTwo: '1949', correct: false,
        optionThree: '1954', correct: false,
        optionFour: '1972', correct: false
    
    },
    {
        question: "What is the Doctor’s home planet in ‘Doctor Who’?",
        optionOne: 'Auros', correct: false,
        optionTwo: 'Tattooine', correct: false,
        optionThree: 'Anagonia', correct: false,
        optionFour: 'Gallifrey', correct: true
    },
    {
        question: "Where we’re going, we don’t need roads” is a quote from which 80’s time travel movie?",
        optionOne: 'Star Wars: Return of the Jedi', correct: false,
        optionTwo: 'Back to the Future II', correct: false, 
        optionThree: 'The Terminatior', correct: false,
        optionFour: 'Twelve Monkeys', correct: false,
        answer: 'Back to the Future II', correct: true
    },
    {
        question: "Who directed the 1979 movie Alien?",
        optionOne: 'Martin Scorsese', correct: false,
        optionTwo: 'John Hughes', correct: false,
        optionThree: 'Ridley Scott', correct: true,
        optionFour: 'George Lucas', correct: false
    },
    {
        question: "Who trained Yoda to use his Jedi powers?",
        optionOne: 'Anakin Skywalker', correct: false,
        optionTwo: 'Darth Sidious', correct: false,
        optionThree: 'Qui Gon Jinn', correct: false,
        optionFour: 'N’Kata Del Gormo', correct: true
    },
    {
        question: "Ellie and Joel are the main characters in which post-apocalyptic video game turned TV series?",
        optionOne: 'The Matrix', correct: false,
        optionTwo: 'Star Wars: Battlefront', correct: false,
        optionThree: 'The Last of Us', correct: true,
        optionFour: 'The Sims', correct: false
    },
    {
        question: "What planet is ‘Dune’ set on?",
        optionOne: 'Mars', correct: false,
        optionTwo: 'Exegol', correct: false,
        optionThree: 'Arrakis', correct: true,
        optionFour: 'Naboo', correct: false
    },
    {
        question: "Who plays Spock in the original series of ‘Star Trek’?",
        optionOne: 'William Shatner', correct: false,
        optionTwo: 'Zachary Quinto', correct: false,
        optionThree: 'Leonard Nimoy', correct: true,
        optionFour: 'DeForest Kelley', correct: false
    },
    {
        question: "In what decase is the TV show Stranger Things set in?",
        optionOne: '2000s', correct: false,
        optionTwo: '1980s', correct: true,
        optionThree: '1990s', correct: false,
        optionFour: '1970s', correct: false
    }
]
const startBtn = document.getElementById("btn-start");

startBtn.addEventListener('click', playGame);
nextButton.addEventListener('click', nextQuestion);


const gameRules = document.getElementById("how-to-play");
const quizAreaElement = document.getElementById('quiz-area');

function playGame() {
    score = 0;
    console.log('Playing Game!');
    gameRules.classList.add("hide");
    startBtn.classList.add("hide");
    quizAreaElement.classList.remove("hide");
    displayQuestion();
}


function nextQuestion() {
    displayQuestion();
}
const potentialAnswerOne = document.getElementById('potential-answer-one');
const potentialAnswerTwo = document.getElementById('potential-answer-two');
const potentialAnswerThree = document.getElementById('potential-answer-three');
const potentialAnswerFour = document.getElementById('potential-answer-four');
const potentialAnswer = document.getElementById("potential-answer")
const questionElement = document.getElementById("question");
let questionNumber = document.getElementById("question-number")


function displayQuestion() {
const index = Math.floor(Math.random() * myQuestionsArray.length)
const question = myQuestionsArray[index]
questionNumber.innerHTML = questionNumberIndex++;
questionElement.innerHTML = question.question;


potentialAnswerOne.innerHTML = question.optionOne;
potentialAnswerTwo.innerHTML = question.optionTwo;
potentialAnswerThree.innerHTML = question.optionThree;
potentialAnswerFour.innerHTML = question.optionFour;

}

    /* if (option == correct) {
         option.document.body.style.color = "#bcd8c1" 
         userScore.innerHTML = score + 1;
     } else {
         option.document.body.style.color = "#E87070" 
         alert("Answer Incorrect!")
     }*/



