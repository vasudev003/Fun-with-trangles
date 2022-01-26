const quizForm = document.querySelector(".quizForm");
const submitBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

const answers = ["90°","right angle"];

function calculateScore (){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()){
        if (value ===answers[index]){
            score = score + 1;
        }
        index = index + 1;
    } 
    outputEl.innerText = "Your Score is " + score;
}

submitBtn.addEventListener('click', calculateScore)