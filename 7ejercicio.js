// introducir tantas frases como queramos y contarlas.

let counter = 0;

const readline = require('readline');

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Write the sentences. 'Stop' to exit");

r1.setPrompt('>>> ');
r1.prompt();

r1.on('line', sentence => {
    sentence = sentence.trim();

    if(sentence == 'Stop' || sentence == 'stop'){
        r1.close();
        return;
    }else{
        counter++;
    }
});

r1.on('close', () => {
    console.log(`There were ${counter} sentences`);
    process.exit(0);
})
