

const line ='to Welcome to the to frequency the counter. It will the to count the text in the word';

const wordCount = line.split(" ");
let wordFrequency = {}; 
let large = 1;
let largeWord = '';
for( let word of wordCount){
    if(wordFrequency[word]){
        wordFrequency[word]++;
        if(wordFrequency[word]>large){
            large = wordFrequency[word];
            largeWord = word;
        }
    }else{
        wordFrequency[word] = 1;
    }
}

console.log(`The repeated word is "${largeWord}" and it's frequency is "${large}".`);