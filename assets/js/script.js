const nextButton = document.getElementById("btn-submit-answer");
let userScore = document.getElementById("score")

const myQuestionsArray = [{
        question: "In what year was the movie 'Star Wars' relased?",
        optionOne: '1979',
        optionTwo: '1987',
        optionThree: '1981',
        optionFour: '1977',
        answer: '1977'
    },
    {
        question: "In what year did Marvel Comics publish the first 'Fantastic Four' Comic?",
        optionOne: '1961',
        optionTwo: '1949',
        optionThree: '1954',
        optionFour: '1972',
        answer: '1961'
    },
    {
        question: "What is the Doctor’s home planet in ‘Doctor Who’?",
        optionOne: 'Auros',
        optionTwo: 'Tattooine',
        optionThree: 'Anagonia',
        optionFour: 'Gallifrey',
        answer: 'Gallifrey'
    },
    {
        question: "Where we’re going, we don’t need roads” is a quote from which 80’s time travel movie?",
        optionOne: 'Star Wars: Return of the Jedi',
        optionTwo: 'Back to the Future II',
        optionThree: 'The Terminatior',
        optionFour: 'Twelve Monkeys',
        answer: 'Back to the Future II'
    },
    {
        question: "Who directed the 1979 movie Alien?",
        optionOne: 'Martin Scorsese',
        optionTwo: 'John Hughes',
        optionThree: 'Ridley Scott',
        optionFour: 'George Lucas',
        answer: 'Ridley Scott'
    },
    {
        question: "Who trained Yoda to use his Jedi powers?",
        optionOne: 'Anakin Skywalker',
        optionTwo: 'Darth Sidious',
        optionThree: 'Qui Gon Jinn',
        optionFour: 'N’Kata Del Gormo',
        answer: 'N’Kata Del Gormo'
    },
    {
        question: "Ellie and Joel are the main characters in which post-apocalyptic video game turned TV series?",
        optionOne: 'The Matrix',
        optionTwo: 'Star Wars: Battlefront',
        optionThree: 'The Last of Us',
        optionFour: 'The Sims',
        answer: 'The Last of Us'
    },
    {
        question: "What planet is ‘Dune’ set on?",
        optionOne: 'Mars',
        optionTwo: 'Exegol',
        optionThree: 'Arrakis',
        optionFour: 'Naboo',
        answer: 'Arrakis'
    },
    {
        question: "Who plays Spock in the original series of ‘Star Trek’?",
        optionOne: 'William Shatner',
        optionTwo: 'Zachary Quinto',
        optionThree: 'Leonard Nimoy',
        optionFour: 'DeForest Kelley',
        answer: 'Leonard Nimoy'
    },
    {
        question: "In what decase is the TV show Stranger Things set in?",
        optionOne: '2000s',
        optionTwo: '1980s',
        optionThree: '1990s',
        optionFour: '1970s',
        answer: '1980s'
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
const questionElement = document.getElementById("question");
let questionNumber = document.getElementById("question-number")
let questionNumberIndex = 0;

function displayQuestion() {
    questionNumber.innerHTML = questionNumberIndex + 1;
    const index = Math.floor(Math.random() * myQuestionsArray.length)
    const question = myQuestionsArray[index]

    questionElement.innerHTML = question.question;
    potentialAnswerOne.innerHTML = question.optionOne
    potentialAnswerTwo.innerHTML = question.optionTwo
    potentialAnswerThree.innerHTML = question.optionThree
    potentialAnswerFour.innerHTML = question.optionFour

    /* if (option == correct) {
         option.document.body.style.color = "#bcd8c1" 
         userScore.innerHTML = score + 1;
     } else {
         option.document.body.style.color = "#E87070" 
         alert("Answer Incorrect!")
     }*/
}
displayQuestion();