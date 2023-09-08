let msg;
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
let isPrime = true;
for(let j = 2; j < num; j++){
    if(num % j === 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    alert(`The Given Number ${num} is Prime and it is ${msg}.`);
}
else{
    alert(`The Given Number ${num} is not Prime and it is ${msg}.`);
}
