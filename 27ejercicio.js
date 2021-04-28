// tabla de multiplicar de un numero entre 0 y 10, usando prompt-sync

const prompt = require('prompt-sync')();

function setNumber(value){
    value = prompt("Enter a number: ");

    if(isNaN(value)){
        console.log("--Not a number >:(");
        return -1;
    }

    if(value < 0 || value > 10){
        console.log("--Must be a number between 0 and 10");
        return -1;
    }

    return value;
}

//-------------------------------------------------------

let number = 0;

do{
    number = setNumber(number);
} while(number == -1)

number = Number(number);

for (let index = 1; index <= 10; index++) {
    console.log(`${number}*${index} = ${number*index}`);   
}