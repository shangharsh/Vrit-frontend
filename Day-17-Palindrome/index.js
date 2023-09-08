
let str = prompt("Enter a value");
let reverse = '';
for(let i= str.length-1; i>=0; i--){
    reverse = reverse + str[i];
}

if(str === reverse){
    alert(`The Given Value "${str}" and Reversed value "${reverse}", so it is Palindrome.`);
}else{
    alert(`The Given Value is "${str}" and Reversed value is "${reverse}", so it is not Palindrome.`);
}
