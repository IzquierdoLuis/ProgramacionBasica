// introducir dos numeros por teclado y mediante un menu, calcule su suma, 
// su resta, su multiplicacion o su division, usando prompt-sync

const prompt = require('prompt-sync')();

function setNumber(value){
    value = prompt("Enter a number: ");

    if(isNaN(value)){
        console.log("Not a number >:(");
        return "NaN";
    }
    return value;
}

sum = (first, second) => first + second;
subs = (first, second) => first - second;
mul = (first, second) => first * second;
div = (first, second) => first / second;

//------------------------------------------

let number1 = 0
let number2 = 0;
let fun = 0;

do{
    number1 = setNumber(number1);
}while(number1 == "NaN");

do{
    number2 = setNumber(number2);
}while(number2 == "NaN");

console.log("\t--Menu--");
console.log("1. Sum\n2. Substraction\n3. Multiplication\n4. Division");

do{
    fun = setNumber(fun);
}while(fun == "NaN");

fun = Number(fun);

switch (fun) {
    case 1:
        console.log(`Result = ${sum(number1, number2)}`);
        break;
    case 2:
        console.log(`Result = ${subs(number1, number2)}`);
        break;
    case 3:
        console.log(`Result = ${mul(number1, number2)}`);
        break;
    case 4:
        console.log(`Result = ${div(number1, number2)}`);
        break;
    default:
        console.log("Not a function");
        break;
}