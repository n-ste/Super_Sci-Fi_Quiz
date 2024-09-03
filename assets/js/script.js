let quizArea = document.getElementsByClassName('quiz-area');
let score = document.getElementById('score');
let submit = document.getElementsByClassName('btnSubmitAnswer');

function build() {

}

function generateScore() {

}
build();
submit.addEventListener('click', generateScore);
let quiz = [
    {
        question: "In what year was the film 'Star Wars' released in theaters?",
        potentialAnswers: ["1981", "1972", "1977", "1989"],
        answer: "1977"
    }, 
    {
        question: "Who was the first character or group to have thier own comic book in Marvel Comics?",
        potentialAnswers: ["Natasha Romanov", "Fantastic Four", "Matt Murdoch", "X-Men"],
        answers: "Fantastic Four"
    }, 
    {
        question: "Season One of 'Star Trek: The Original Series' was first released in what year?",
        potentialAnswers: ["1946", "1982", "1966", "1971"],
        answer: "1966"
    }, 
    {
        question: "Who directed the famous 1979 film 'Alien?'",
        potentialAnswers: ["David Lynch", "Martin Scorsese", "Ridley Scott", "John Hughes"],
        answer: "Ridley Scott"
    }
]
