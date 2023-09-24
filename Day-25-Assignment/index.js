//Calculate the vowels in a string.
const inputString = 'hello world!!!';
let countVowel = 0;
let vowelLetter = [];
for (i=0 ; i<inputString.length ; ++i) {
    if(inputString[i] === 'a' || inputString[i] === 'e' || inputString[i] === 'i' || inputString[i] === 'o' || inputString[i] === 'u'){
        countVowel ++;
        vowelLetter.push(inputString[i]);
    }
}
console.log(`The total numbers of vowel letters are: "${countVowel}" and letters are as follows: "${vowelLetter}".`);

//Calculate the factorial of a number.
const number = 5;
let fact = 1;
for(let i = number; i>=1; i--){
    fact *= i;
}
if(number === 0){
    fact = 1;
}
console.log(`Factorial of "${number}" is: "${fact}". `);

//Calculate the average of numbers in an array.
const array = [1,2,3,4];
let sum = 0;
array.forEach((num)=>{
    sum = sum + num;
});

const avg = sum/2;

console.log(`The Average of numbers in an Array "${array}" is: "${avg}"`);


