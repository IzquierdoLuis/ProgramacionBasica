// introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, 
// pero cada impresion ir desplazada cuatro columnas hacia la derecha, usando prompt-sync

const prompt = require('prompt-sync')();

function print(spaces, sentence) {
    for (let index = 0; index < 5; index++) {
        console.log(`${spaces}${sentence}`);
        spaces += "    ";
    }
}

//--------------------------------------------

let sentence = prompt("Write a sentence: ");
let spaces = "";

print(spaces, sentence);    
