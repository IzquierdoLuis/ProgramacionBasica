// imprimir, contar y sumar los multiplos de 2 que hay entre una serie de numeros, 
// tal que el segundo sea mayor o igual que el primero, usando prompt-sync

let first = 0;
let second = 0;
let counter = 0;
let sum = 0;

const prompt = require('prompt-sync')();

function setNumber(value){
    value = prompt("Enter a number: ");

    if(isNaN(value)){
        console.log("Not a number:/");
        return "NaN";
    }
    return value;
}

//---------------------------------------------

do{
    first = setNumber(first);
}while(first == "NaN");

do{
    second = setNumber(second);
}while(second == "NaN");

first = Number(first);
second = Number(second);

if(second < first){
    let aux = first;
    first = second;
    second = aux;
}

for (let index = first; index <= second; index++) {
    if(index%2 == 0){
        console.log(index);
        counter++;
        sum += index;
    }
}

console.log(`There are ${counter} multiples of 2, the sum of them is ${sum}`);
