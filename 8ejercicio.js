// programa que solo permite introducir S o N, usando prompt-sync

const prompt = require('prompt-sync')();

let letter = " ";

do{
	letter = prompt("Entry 'S' or 'N': ");
    letter = letter.toLowerCase();

    if(letter != 's' && letter != 'n')
        console.log("\nYou can only write 'S' or 'N'\n");
}while(letter != 's' && letter != 'n');
