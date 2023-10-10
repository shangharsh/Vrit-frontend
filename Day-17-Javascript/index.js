const number = prompt("Enter a number");
const num = Number(number);
let msg;

oddEven(num);
function oddEven(i){
    if (i % 2 === 0) {
        msg = `The Number ${i} is even`;
        hasPrime(i, msg);
    }   else{
        msg = `The Number ${i} is odd`;
        hasPrime(i, msg);
    }
}

function hasPrime(j, msg){
    let isPrime = true;
    for(let i = 2; i < j/2; i++){
        if(j % i === 0){
            isPrime = false;
            break;
        }
    }
    
    if(isPrime){
        console.log(`${msg} and it is Prime.`);
    }else{
        console.log(`${msg} and it is not Prime.`);
    }
}

// for(let i = 5; i <= num -5; i++){
//     if(i % 5 === 0){
//     }
// }

