const gameRules = document.getElementById("how-to-play");
const startBtn = document.getElementById("btn-start");
const nextButton = document.getElementById("btn-submit-answer");
const quizAreaElement = document.getElementById('quiz-area');
const questionElement = document.getElementsByClassName('question');
const potentialAnswer = document.getElementsByClassName('potential-answers');
let Score = 0;
let questionNumber = 0;
const questions = [
    {
        question: "In what year was the movie 'Star Wars' relased?",
        option: '1979',
        option: '1987',
        option: '1981',
        option: '1977', 
        answer: '1977'
    }, 
    {
        question: "In what year did Marvel Comics pulish the first 'Fantastic Four' Comic?",
        option: '1961',
        option: '1949',
        option: '1954',
        option: '1972',
        answer: '1961'
    }
]

startBtn.addEventListener('click', playGame);
nextButton.addEventListener('click', nextQuestion);

    

function playGame() {
    score = 0;
    questionNumber = 0;
    console.log('Playing Game!');
    gameRules.classList.add("hide");
    startBtn.classList.add("hide");
    quizAreaElement.classList.remove("hide");
    nextQuestion();
}

function nextQuestion() {
    questionNumber++;
    console.log(questionNumber);
    displayQuestion()
}

function displayQuestion() {
}

displayQuestion();
