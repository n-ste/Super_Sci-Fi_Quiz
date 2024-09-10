document.addEventListener("DOMContentLoaded", () => {
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

    const quizArea = document.getElementById('question-area');
    const question = document.getElementById("question");
    const options = document.getElementById("answers");
    const submitButton = document.querySelector(".submit-buttons .btn-submit-answer");
    const scoreBoardButton = document.getElementById("btn-score-board");
    const playAgain = document.getElementById("play-again-btn");
    let scoreBoardTable = document.getElementById("score-board-table");
    let questionNumber = document.getElementById("question-number");
    let questionNo = 0;
    let currentUserScore = 0;

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
    const questionShuffle = (array) => {
        return array.slice().sort(() => Math.random() - 0.5);
    };

    myQuestionArray = questionShuffle(myQuestionArray);
    // Help displaying the questions and options for quiz sources from Youtube, credits in README file.
    const displayQuestions = () => {
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

    function nextQuestion() {
        if (questionNo >= questionAllowance - 2) {
            submitButton.classList.add("hide");
            scoreBoardButton.classList.remove("hide");
        }

        if (questionNo >= questionAllowance - 1) {
            return;
        };

        questionNo++;
        displayQuestions();
        options.classList.remove("disabled");
    };
    function generateScoreBoard() {
        quizArea.style.display = "none";
        scoreBoardTable.classList.remove("hide");
        scoreBoardButton.classList.add("hide");
        playAgain.classList.remove("hide");
    };

    function restart() {
        questionNo = 0;
        currentUserScore = 0;
        userScore.innerHTML = currentUserScore;
        displayQuestions();
        quizArea.style.display = "flex";
        options.classList.remove("disabled");
        submitButton.classList.remove("hide");
        playAgain.classList.add("hide");
    }

    submitButton.addEventListener("click", nextQuestion);
    scoreBoardButton.addEventListener("click",generateScoreBoard);
    playAgain.addEventListener("click", restart);
});