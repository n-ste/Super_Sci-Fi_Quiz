document.addEventListener("DOMContentLoaded", () => {
    let myQuestionArray = [
        {
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
            question: "Where we’re going, we don’t need roads” is a quote from which 80’s time travel movie?",
            options: ["Star Wars: Return of the Jedi", "Back to the Future II", "The Terminatior", "Twelve Monkeys", "Back to the Future II"],
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
            options: ["The Matrix","Star Wars: Battlefront","The Last of Us","The Sims"],
            correct: "The Last of Us",
        },
        {
            question: "What planet is ‘Dune’ set on?",
            options: ["Mars", "Exegol","Arrakis","Dormir"],
            correct: "Arrakis",
        },
        {
            question: "Who plays Spock in the original series of ‘Star Trek’?",
            options: ["William Shatner","Zachary Quinto","Leonard Nimoy","DeForest Kelley"],
            correct: "Leonard Nimoy",
        },
        {
            question: "In what decase is the TV show Stranger Things set in?",
            options: ["2000s", "1980s", "1990s", "1970s"],
            correct: "1980s"
    
        }
    ];

    const questionArea = document.getElementById('question-area');
    const question = document.getElementById("question");
    const options = document.getElementById("answers");
    const submitButton = document.querySelector(".submit-buttons .btn-submit-answer");
    let questionNumber = document.getElementById("question-number");
    let questionNo = 0;

    // Help displaying the questions and options for quiz sources from Youtube, credits in README file.
    const displayQuestions = () => {
        questionNumber.innerHTML = questionNo + 1;
        question.innerHTML = myQuestionArray[questionNo].question;

        myQuestionArray[questionNo].options.forEach((option) => {
            const AnswerOption = document.createElement("button");
            AnswerOption.classList.add("answer-option");
            AnswerOption.innerHTML = option;
            options.appendChild(AnswerOption);
        });
    }
    function questionIncrement() {
        questionNo++;
        questionNumber++;
    }

    function nextQuestion() {
        submitButton.addEventListener("click", questionIncrement);
    };
    displayQuestions();
    nextQuestion();
    questionIncrement();
});
    
