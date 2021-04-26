// programa que imprime los números naturales que hay 
// desde el uno hasta un número que introducimos por teclado

const readline = require('readline');

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a number: ", number => {
    for (let index = 1; index <= number; index++) {
        console.log(index);        
    }
    r1.close();
});