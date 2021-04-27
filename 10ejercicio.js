// progama que dice si un numero es par o impar, usando prompt-sync

const prompt = require('prompt-sync')();

let number = 0;
let type = " ";

number = prompt("Entry a number: ");

if (number%2 == 0){
    type = "even";
} else{
    type = "odd";
}

if(isNaN(number)){
    console.log("Not a number:/");
} else{
    console.log(`Your number is ${type}`);
}