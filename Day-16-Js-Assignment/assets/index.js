let msg;
let i;
const number = prompt("Enter a Number to find out whether a given number is prime and even/odd.");
const num = Number(number);

//Checks Even or Odd Number
if (num % 2 ===0) {
    msg="Even";
}
else{
    msg ="Odd";
}

//Checks Prime number or not
for(i = 2; i <= num-1; i++){
    if(num % i === 0){
        break;
    }
}
if(num === i){
    alert(`The Given Number ${num} is Prime and it is ${msg}.`);
}
else{
    alert(`The Given Number ${num} is not Prime and it is ${msg}.`);
}