// programa que calcule independientemente la suma de los pares y los impares de los 
// numeros entre 1 y 1000

let even = 0;
let odd = 0;

for (let index = 1; index <= 1000; index++) {
    if(index%2 == 0)
        even += index;
}

for (let index = 1; index <= 1000; index++) {
    if(index%2 != 0)
        odd += index;
}

console.log(`Sum of even numbers: ${even}\nSum of odd numbers: ${odd}`);