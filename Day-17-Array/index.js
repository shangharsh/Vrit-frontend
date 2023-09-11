const arr = [210,23,12,89,506,34,100];
let large = '';

// To find the largest Number in an array.
for(let i=0; i<arr.length; i++){
    if(arr[i]>large){
        large = arr[i];
    }
}
document.write(`<h1>Task 1: Largest Number In An Array[210,23,12,89,506,34,100].</h1><h3>The largest Number in an array is "${large}"</h3>.`);


//Search for an element in an array.
const fname = prompt("Enter any Fruit Name.");
const fruits = ["banana", "orange", "apple", "kiwi"];

let msg = '';
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
    if(JSON.stringify(fruits[i]) == JSON.stringify(fname)){
        msg = `"${fname}" found in an Array at Index "${i}".`
        break;
    }
    else{
        msg = `"${fname}" is not found in an Array.`
    }
}
document.write(`<h1>Task 2: Search Fruit Name in an Array["banana", "orange", "apple", "kiwi"].</h1><h3>${msg}</h3>`);

