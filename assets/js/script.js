
const nextButton = document.getElementById("btn-submit-answer");
let userScore = document.getElementById("score")

const myQuestionsArray = [
    {
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
    }
]
const startBtn = document.getElementById("btn-start");

startBtn.addEventListener('click', playGame);
nextButton.addEventListener('click', nextQuestion);

    
const gameRules = document.getElementById("how-to-play");
const quizAreaElement = document.getElementById('quiz-area');

function playGame() {
    score = 0;
    questionNumberIndex = 0;
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