/*  programa que imprima los números del 1 al 100 y que calcule la 
    suma de todos los números pares por un lado, y por otro, 
    la de todos los impares 
*/

let even = 0;
let odd = 0;

for (let index = 1; index <= 100; index++) {
    console.log(index);
    if(index%2 == 0)
        even += index;
    else
        odd += index;
}

console.log(`Sum of even numbers: ${even}\nSum of odd numbers: ${odd}`);