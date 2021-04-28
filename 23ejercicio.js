// programa que imprime los numeros del 0 al 100, controlando las filas y las columnas

let number = 0;

for (let index = 0; index < 10; index++) {
    for (let index = 0; index < 10; index++) {
        if(number < 10)
            process.stdout.write("0");

        process.stdout.write(`${number++} `);
    }
    console.log();
}

console.log("100");