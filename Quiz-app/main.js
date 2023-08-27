const startQuiz = document.querySelector(".start-quiz-btn");
const rulesQuiz = document.querySelector(".rules-quiz");
const exitQuiz = document.querySelector(".exit-quiz");
const continueQuiz = document.querySelector(".continue-quiz");
const quizContainer = document.querySelector(".quiz-container");
const options = document.querySelector(".option-container");
const timeCount = document.querySelector(".time-counter");
const timeLine = document.querySelector(".time-line");


// Show the rules-quiz container when click on the start-quiz button...
startQuiz.onclick = () =>{
    rulesQuiz.classList.add("activerules");
}

// Hide the rules-quiz container when click on the exit-quiz container...
exitQuiz.onclick = () =>{
    rulesQuiz.classList.remove("activerules");
}

// Show the quiz-container and hide the rules-quiz container when click on the continue button...
continueQuiz.onclick = () =>{
    quizContainer.classList.add("activequiz");
    rulesQuiz.classList.remove("activerules");
    showQuestions(0);
    questionCounter(1);
    startTime(timeValue);
}


let questCounter = 0;
let questNumber = 1;
let counter;
let timeValue = 15;

// Fetching the questions and options from the array.....
function showQuestions(index){
    const question = document.querySelector(".question");
    let questiontag = `<span>` +questions[index].numb+ `. ` +questions[index].question + `</span>`;
    question.innerHTML = questiontag;
    let optionstag = `<li class="options">` + questions[index].options[0] + `</li>`
                    + `<li class="options">` + questions[index].options[1] + `</li>`
                    + `<li class="options">` + questions[index].options[2] + `</li>`
                    + `<li class="options">` + questions[index].options[3] + `</li>`;   
    options.innerHTML = optionstag; 

    const option = options.querySelectorAll(".options");
    for(let i = 0; i < option.length; i++ ){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let allOptions = options.children.length;
    // console.log(userAns);
    let correctAns = questions[questCounter].answer;
    if( userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct.");
    }

    else{
        answer.classList.add("incorrect"); 
        console.log("Answer is incorrect");
    
//if the answer is incorrect then it shows the correct answer.
        for(let i = 0; i <allOptions; i++){
            if(options.children[i].textContent == correctAns){
                options.children[i].setAttribute("class", "options correct")
            }
        }
    }

//if user once click option then other options can't be click.
    for(let i = 0; i < allOptions; i++){
        options.children[i].classList.add("disabled");
    }
}


const nextBtn = document.querySelector(".next-quest");

// If next button is clicked next questions will display...
nextBtn.onclick = () => {
    if(questCounter < questions.length -1){
        questCounter++;
        questNumber++;
        showQuestions(questCounter);
        questionCounter(questNumber);
        clearInterval(counter);
        startTime(timeValue);
        // startTimeLine(time);
    }
    else{
        window.location.reload(true)
    }
}

function questionCounter(index){
const questprogressCounter = document.querySelector(".questions-counter");     
let totalQuestionTag =  `<span>` + index + `</span>of<span>`+ questions.length +`</span> Questions.`;
questprogressCounter.innerHTML = totalQuestionTag;
}

function startTime(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addzero = timeCount.textContent;
            timeCount.textContent = "0" + addzero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}

function startTimeLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        timeCount.textContent = time;
        time += 1;
        if(time < 549){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}