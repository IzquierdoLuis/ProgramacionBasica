// promedio de 10 materias, usando prompt-sync

const prompt = require('prompt-sync')();

function setNumber(value){
    value = prompt("Enter a number: ");

    if(isNaN(value)){
        console.log("--Not a number >:(");
        return -1;
    }

    if(value < 0){
        console.log("--Must be a number >= 0");
        return -1;
    }

    return value;
}

let grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let final = 0;

for (let index = 0; index < 10; index++) {
    do{
        grades[index] = setNumber(grades[index]);
    } while(grades[index] == -1);
}

for (let index = 0; index < 10; index++) {
    grades[index] = Number(grades[index]);
    final += grades[index];
}

console.log(`\nFinal grade: ${final/10}`);