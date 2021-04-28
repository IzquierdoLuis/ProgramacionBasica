/* introducir dos numeros por teclado. Imprimir los numeros naturales que hay
   entre ambos numeros empezando por el mas pequeño, contar cuantos hay y 
   cuantos de ellos son pares. Calcular la suma de los impares, usando prompt-sync
*/

let first = 0
let second = 0;
let even = 0;
let odd = 0;
let natural = 0;

const prompt = require('prompt-sync')();

function setNumber(value){
    value = prompt("Enter a number: ");

    if(isNaN(value)){
        console.log("Not a number:/");
        return "NaN";
    }
    return value;
}

//--------------------------------------------------

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
    if (index >= 0) {
        console.log(index);

        natural++;

        if(index%2 == 0)
            even++;
        else
            odd += index;
    }
}

console.log(`Considering zero as a natural number, there are ${natural} natural numbers`);
console.log(`${even} even numers and the sum of the odd numbers is ${odd}`);