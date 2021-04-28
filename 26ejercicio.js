//  introducir una frase por teclado e imprimirla en el centro de la pantalla
//  usando prompt-sync

const prompt = require('prompt-sync')();

let sentence = prompt("write a sentence: ");

console.log(`\t\t\t\t${sentence}`);