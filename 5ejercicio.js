// programa que imprime los numeros impares hasta el 100
// y cuantos impares hay

let odd = 0;

for (let index = 0; index <= 100; index++) {
    if(index % 2 != 0){
        console.log(index);    
        odd++;
    }
}

console.log("There are " + odd + " odd numbers");