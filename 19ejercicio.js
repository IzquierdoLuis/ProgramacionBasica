// programa que simula el funcionamiento de un reloj digital y que permite ponerlo en hora

let update = " ";

const prompt=require('prompt-sync')();

function getTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;
 
    console.log(`${hours}:${minutes}:${seconds}`);
}

//----------------------------------------------------

do{
    getTime();
    update = prompt("'U' to update the time, write anything else to exit: ");
    update = update.toLowerCase();
}while (update == "u");