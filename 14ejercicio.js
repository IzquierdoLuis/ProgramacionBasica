// programa que imprima el mayor y el menor de una serie de cinco
// numeros que vamos introduciendo por teclado, usando prompt-sync 

const prompt = require('prompt-sync')();

let array = [1, 2, 3, 4, 5];
let number = 0;

function setNumbers(index){
    if(isNaN(number)){
        console.log("Not a number:/");
        return 1;
    }

    number = Number(number);
    array[index] = number;
    
    return 0;
}

function getLowestAndHighest() {
    let max = 0;
    let min = 0;

    for (let index = 0; index < 5; index++) {
        if(array[index] > max)
            max = array[index];
    }

    min = max;

    for (let index = 0; index < 5; index++) {
        if(array[index] < min)
            min = array[index];
    }

    console.log(`\nLowest value: ${min}\nHighest value: ${max}`);
}

for (let index = 0; index < 5; index++) {
    number = prompt("Enter a number: ");

    if(setNumbers(index) == 1)
        index--;
}

getLowestAndHighest();