// imprimir  y  contar  los  multiplos  de  3  desde  el  uno  
// hasta  un  numero  que  introducimos  por teclado, usando prompt-sync

const prompt = require('prompt-sync')();

let number = 0;
let counter = 0;

function fun(){
    if(isNaN(number)){
        console.log("Not a number:/");
        return;
    }
    
    if(number < 0){
        return;
    }

    for (let index = 1; index <= number; index++){
        if(index%3 == 0){
            console.log(index);
            counter++;
        }
    }

    console.log(`There were ${counter} multiples of 3`);
}

number = prompt("Entry a number: ");

fun();