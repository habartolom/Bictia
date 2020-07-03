function getRandom(){
    return Math.floor(Math.random()*100)
}

var randonNumber = getRandom();
var counter = 1;

while(randonNumber != 50){
    counter++;
    randonNumber = getRandom();
}

console.log("El numero de veces que se llamó la función fue: " + counter + " veces");