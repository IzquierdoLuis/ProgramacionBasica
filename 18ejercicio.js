// programa que cuenta las veces que aparece una determinada letra en una frase que 
// introduciremos por teclado, usando prompt-sync

let sentence = " ";
let letter = " ";
let counter = 0;

const prompt = require('prompt-sync')();

sentence = prompt("Write a sentence: ");

letter = prompt("Enter a letter: ");

sentence = sentence.toLowerCase();
letter = letter.toLowerCase();

for (let index = 0; index <= sentence.length; index++) {
    if (sentence[index] == letter)
        counter++;
}

console.log(`The sentence contains ${counter} times that letter`);