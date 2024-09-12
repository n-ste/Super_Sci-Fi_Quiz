document.addEventListener("DOMContentLoaded", () => {
    // Global Variables
    // Attay for quiz questions
    let userScore = document.getElementById("score");
    let myQuestionArray = [{
            question: "In what year was the movie 'Star Wars' relased?",
            options: ["1979", "1987", "1981", "1977"],
            correct: "1977",
        },
        {
            question: "In what year did Marvel Comics publish the first 'Fantastic Four' Comic?",
            options: ["1961", "1949", "1954", "1972"],
            correct: "1961",
        },
        {
            question: "What is the Doctor’s home planet in ‘Doctor Who’?",
            options: ["Auros", "Tattooine", "Anagonia", "Gallifrey"],
            correct: "Gallifrey",
        },
        {
            question: "'Where we’re going, we don’t need roads' is a quote from which 80’s time travel movie?",
            options: ["Star Wars: Return of the Jedi", "Back to the Future II", "The Terminatior", "Twelve Monkeys"],
            correct: "Back to the Future II",
        },
        {
            question: "Who directed the 1979 movie 'Alien?'",
            options: ["Martin Scorsese", "John Hughes", "Ridley Scott", "George Lucas"],
            correct: "Ridley Scott",
        },
        {
            question: "Who trained Yoda to use his Jedi powers?",
            options: ["Anakin Skywalker", "Darth Sidious", "Qui Gon Jinn", "N’Kata Del Gormo"],
            correct: "N’Kata Del Gormo",
        },
        {
            question: "Ellie and Joel are the main characters in which post-apocalyptic video game turned TV series?",
            options: ["The Matrix", "Star Wars: Battlefront", "The Last of Us", "The Sims"],
            correct: "The Last of Us",
        },
        {
            question: "What planet is ‘Dune’ set on?",
            options: ["Mars", "Exegol", "Arrakis", "Dormir"],
            correct: "Arrakis",
        },
        {
            question: "Who plays Spock in the original series of ‘Star Trek’?",
            options: ["William Shatner", "Zachary Quinto", "Leonard Nimoy", "DeForest Kelley"],
            correct: "Leonard Nimoy",
        },
        {
            question: "In what decade is the TV show Stranger Things set in?",
            options: ["2000s", "1980s", "1990s", "1970s"],
            correct: "1980s"

        }
    ];

    // Variables that link from the HTML elements
    const quizArea = document.getElementById("question-area");
    const question = document.getElementById("question");
    const options = document.getElementById("answers");
    const scoreHeader = document.getElementById("score-header");
    const submitButton = document.querySelector(".submit-buttons .btn-submit-answer");
    const usernameArea = document.getElementById("username-container");
    const usernameSubmit = document.getElementById("username-btn");
    const submitQuiz = document.getElementById("submit-quiz-results");
    const playAgain = document.getElementById("play-again-btn");
    const resetGame = document.getElementById("reset-btn");
    const game = document.getElementById("quiz-area");
    const startButton = document.getElementById("start-btn");
    const gameRules = document.getElementById("game-rules-btn");
    const gameInstructions = document.getElementById("game-instructions");
    let scoreBoard = document.getElementById("score-board");
    let questionNumber = document.getElementById("question-number");
    let displayedUserName = document.getElementById("user-input-name");
    let questionNo = 0;
    let currentUserScore = 0;

    // Runs function to display game instructions on page start up.
    showGameInstructions();

    // If else tatement to provide feedback for the correct and incorrect answer 
    const verifyAnswer = (e) => {
        let selectedAnswer = e.target.textContent;
        currentUserScore++;
        userScore.innerHTML = currentUserScore;
        console.log(selectedAnswer);
        if (selectedAnswer == myQuestionArray[questionNo].correct) {
            e.target.classList.add("correct");
            options.classList.add("disabled");
        } else {
            e.target.classList.add("incorrect");
            options.classList.add("disabled");
        }
    };

    const questionAllowance = 10;
    // Shuffles the questions so they arreap in a different order each time the display question function is run
    const questionShuffle = (array) => {
        return array.slice().sort(() => Math.random() - 0.5);
    };

    myQuestionArray = questionShuffle(myQuestionArray);
    // Help displaying the questions and options for quiz sources from Youtube, credits in README file.
    const displayQuestions = () => {
        ;
        options.innerHTML = "";
        questionNumber.innerHTML = questionNo + 1;
        question.innerHTML = myQuestionArray[questionNo].question;
        myQuestionArray[questionNo].options.forEach((option) => {
            const answerOption = document.createElement("button");
            answerOption.classList.add("answer-option");
            answerOption.innerHTML = option;
            answerOption.addEventListener("click", (e) => {
                verifyAnswer(e);
            })
            options.appendChild(answerOption);
        });
    }
    displayQuestions();

    // If statement to stop the quiz if the value of questions is greater than the amount of questions on the array
    function nextQuestion() {
        if (questionNo >= questionAllowance - 2) {
            submitButton.style.display = "none";
            submitQuiz.style.display = "inline-block";
        }

        if (questionNo >= questionAllowance - 1) {
            return;
        };

        questionNo++;
        displayQuestions();
        options.classList.remove("disabled");
    };

    // Displays the final score once the quiz has been completed
    function displayScore() {
        let finalScore = currentUserScore;
        displayedUserName.innerHTML = username.value + " Scored " + finalScore + "/10";
        scoreBoard.style.display = "block";
    };

    // Functions to display the username window once the question answers have been submitted
    function supplyUsername() {
        usernameArea.style.display = "block";
        submitQuiz.style.display = "none";
        quizArea.style.display = "none";
        scoreHeader.style.display = "none";
    };
    // Function to hide sections of the page once the quize had been submitted and display the results of the quiz
    function generateScoreBoard() {
        scoreBoard.classList.remove("hide");
        playAgain.classList.remove("hide");
        submitButton.classList.add("hide");
        usernameArea.style.display = "none";
        displayScore();
        playAgain.style.display = "block";
    };

    // Function to closes the other windows when you want to play the quiz again and displays the quiz questions
    function restart() {
        questionNo = 0;
        currentUserScore = 0;
        userScore.innerHTML = currentUserScore;
        displayQuestions();
        quizArea.style.display = "flex";
        options.classList.remove("disabled");
        submitButton.classList.remove("hide");
        playAgain.classList.add("hide");
        game.style.display = "flex";
        scoreHeader.style.display = "block";
        submitButton.style.display = "inline-block";
        gameInstructions.style.display = "none";
        usernameArea.style.display = "none";
        scoreBoard.style.display = "none";
    }
    // Function to display the game instructions and hide other areas of the quiz
    function showGameInstructions() {
        gameInstructions.style.display = "flex";
        quizArea.style.display = "none";
        scoreHeader.style.display = "none";
        submitButton.style.display = "none";
        playAgain.style.display = "none";
        submitQuiz.style.display = "none";
        usernameArea.style.display = "none";
        scoreBoard.style.display = "none";

    }

    // Event listeners for when you click the buttons on the page so the functions are run.
    startButton.addEventListener("click", restart);
    submitButton.addEventListener("click", nextQuestion);
    playAgain.addEventListener("click", restart);
    resetGame.addEventListener("click", restart);
    gameRules.addEventListener("click", showGameInstructions);
    submitQuiz.addEventListener("click", supplyUsername);
    usernameSubmit.addEventListener("click", generateScoreBoard);
});