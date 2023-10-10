

const line ='to Welcome to the to frequency the counter. It will the to count the text in the word';

const wordCount = line.split(" ");
let wordFrequency = {}; 
for( let word of wordCount){
    if(wordFrequency[word]){
        wordFrequency[word]++;
    }else{
        wordFrequency[word] = 1;
    }
}

console.log(`${JSON.stringify(wordFrequency)}`);