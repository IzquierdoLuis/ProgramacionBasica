// Imprimir y contar los numeros que son multiplos de 2 o de 3 
// que hay entre 1 y 100 

let two = 0;
let three = 0;

for (let index = 1; index <= 100; index++){
    if(index%2 == 0){
        console.log(index);
        two++;
    }
    else if(index%3 ==0){
        console.log(index);
        three++;
    }
}

console.log(`Multiples of 2: ${two}\nMultiples of 3: ${three}`);