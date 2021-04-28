const prompt = require('prompt-sync')();

function setNumber(value){
    value = prompt("Enter a number: ");

    if(isNaN(value)){
        console.log("--Not a number >:(");
        return -1;
    }

    if(value < 1){
        console.log("--Must be a number >= 1");
        return -1;
    }

    return value;
}

function isPrime(value) {
    value = Number(value);

    if (value == 1 || value == 4) 
        return false;

    for (let index = 2; index < value / 2; index++) {
        if (value%index == 0) 
            return false;
    }
  return true;
}

function factorial(value) {
    let fact = 1;

    value = Number(value);

    for (let index = 1; index <= value; index++) 
        fact *= index;
    
    return fact;
}

//--------------------------------------------------

let number = 0;

do{
    number = setNumber(number);
} while(number == -1);

number = Number(number);

console.log(`Is ${number} a prime number? ${isPrime(number)}`);
console.log(`Factorial: ${factorial(number)}`);

for (let index = 1; index <= 10; index++) {
    console.log(`${number}*${index} = ${number*index}`);   
}