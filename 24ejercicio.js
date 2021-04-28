// comprobar si un numero mayor o igual que la unidad es primo, usando prompt-sync

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

//--------------------------------------------------

let number = 0;

do{
    number = setNumber(number);
} while(number == -1);

console.log(`Is ${number} a prime number? ${isPrime(number)}`);
