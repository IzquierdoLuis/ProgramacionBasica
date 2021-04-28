/*  basado en el codigo de Marina Ortiz Ruiz
    https://github.com/MarinaOrtiz328/DeBaPlaProgramacionBasica/blob/master/25.js
    introducir un numero menor a 5000 y pasarlo a numero romano, usando prompt-sync
*/

const prompt = require('prompt-sync')();

function roman(number){
    const roman = {
        _V_: 5000,
        _IV_: 4000,
        MMM: 3000,
        MM: 2000,
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    let result = "";
    for (let r in roman) {
        result += r.repeat(Math.floor( number/roman[r]));
        number = number % roman[r];
    }
    return result;
}

function setNumber(value){
    value = prompt("Enter a number: ");

    if(isNaN(value)){
        console.log("--Not a number >:(");
        return -1;
    }

    if(value < 0 || value > 4999){
        console.log("--Must be a number < 5000");
        return -1;
    }

    return value;
}

//---------------------------------------------------------------

let converted = 0;

do{
    converted = setNumber(converted);
} while(converted == -1);

converted = Number(converted);
console.log(roman(converted));