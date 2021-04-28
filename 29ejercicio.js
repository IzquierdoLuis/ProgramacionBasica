// simular 100 tiradas de dados y contar las veces que entre los dos suman 10

let number1 = 0;
let number2 = 0;
let counter = 0;

for (let index = 0; index < 100; index++) {
    number1 = Math.floor(Math.random() * 6) + 1;
    number2 = Math.floor(Math.random() * 6) + 1;

    if(number1+number2 == 10)
        counter++;    
}

console.log(`${counter} times the sum of both dices = 10`);