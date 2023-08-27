let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let output = document.getElementById('score');
let score = 0;

plus.addEventListener('click', () => {
    score ++;
    output.innerText = score;
    if(score >=1){
        output.style.color = 'green';
    }
    else if(score == 0){
        output.style.color = 'white';
    }
});

minus.addEventListener('click', () => {
    score --;
    output.innerText = score;
    if(score <0){
        output.style.color = 'red';
    } 
    else if(score == 0){
        output.style.color = 'white';
    }
});

reset.addEventListener('click', () => {
    score = 0;
    output.innerText = score;
    output.style.color = 'white';
});