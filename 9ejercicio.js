// programa que dice si un numero es positivo o negativo, usando prompt-sync

const prompt = require('prompt-sync')();

let number = 0;
let type = " ";

number = prompt("Entry a number: ");

if (number == 0) {
    type = "zero";
} else if(number > 0){
    type = "positive";
} else{
    type = "negative";
}

if(isNaN(number)){
    console.log("Not a number:/");
} else{
    console.log(`Your number is ${type}`);
}
