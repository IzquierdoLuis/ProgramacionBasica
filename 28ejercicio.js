// simular el lanzamiento de una moneda

let number = Math.random()*2;
number = parseInt(number);

console.log("Tossing coin...");

setTimeout(() => {
    if(number == 0)
        console.log("Tail!")
    else
        console.log("Head!");
}, 3000);
