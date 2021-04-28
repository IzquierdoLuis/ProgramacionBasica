//  calcular el factorial de un numero, mediante funciones, usando prompt-sync

const prompt = require('prompt-sync')();

function setNumber(value){
    value = prompt("Enter a number: ");

    if(isNaN(value)){
        console.log("--Not a number >:(");
        return -1;
    }

    if(value < 0){
        console.log("--Must be a positive number");
        return -1;
    }

    return value;
}

function factorial(value) {
    let fact = 1;

    value = Number(value);

    for (let index = 1; index <= value; index++) 
        fact *= index;
    
    return fact;
}

//----------------------------------------
let number = 0;

do{
    number = setNumber(number);
} while(number == -1);

console.log(`The factorial of ${number} is ${factorial(number)}`);
