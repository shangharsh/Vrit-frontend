// 0, 1, 1, 2, 3, 5, 8....

let a= 0;
let b= 1;
let total;
fib = [];
fib.push(a);
fib.push(b);

const num = Number(prompt("Enter a number"))
for(let i=2; i<num-1; i++){
    total = a + b;
    a = b;
    b = total;
    fib.push(total);
}


console.log(`The series of fibonacci till the Number ${num} are as follows: ${fib}`);