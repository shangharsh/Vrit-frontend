// Conditional Statement
//if else

const age= 26;
// if(age>=18){
//     alert('Eligible to create Passport for age: '+ age);
// }
// else{
//     alert('Not eligible to create Passport for age: '+ age);
// }

// const email = prompt("abc@gmail.com");
// const password = "12345";

// if(!email){
//     alert("Please enter your Email");
// }else if(!password){
//     alert("Please Enter Password") ;
// }else{
//     alert(`Email and Password are valid.`);
// }

let msg;
// const mark = prompt("Enter Mark");
// const num = Number(mark);

// if(num%2===0){
//     msg="Even";
// }
// else {
//     msg ="Odd";
// }

// if(num>=80 && num<=100){
//     alert(`Congratulations!!!, You Have Passed with Distinction ${num}% and it is ${msg}.`);
// }
// else if(num>=70 && num<80){
//     alert(`Congratulations!!!, You Have Passed with First Division ${num}% and it is ${msg}.`);
// }
// else if(num>=60 && num<70){
//     alert(`Congratulations!!!, You Have Passed with Second Division ${num}% and it is ${msg}.`);
// }
// else if(num>=40 && num<60){
//     alert(`Congratulations!!!, You Have Passed with Third Division ${num}% and it is ${msg}.`);
// }
// else if(num>=35 && num<40){
//     alert(`Congratulations!!!, You Have Passed with ${num}% and it is ${msg}.`);
// }
// else if(num>=0 && num<35){
//     alert(`Sorry!!!, You Have failed with ${num}% and it is ${msg}.`);
// }
// else{
//     alert(`${mark}, Please Enter a Valid Marks Between 0-100`);
// }


const number = prompt("Enter a Number.");
const val = Number(number);
alert(`The Sum of Numbers from 0 to ${val} is ${val*(val+1)/2}.`);
