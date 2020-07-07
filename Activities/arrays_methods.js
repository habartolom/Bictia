function getRandom(){
    return Math.ceil(Math.random()*100);
}

var numbers = [];

for (i = 0; i < 3; i++){
    numbers.push(getRandom());
}

console.log(numbers);

var esPar = numbers.some(number => number % 2 == 0);                    //some()

if(esPar){
    console.log("Hay al menos un número par");
}
else{
    console.log("No hay números pares");
}


my_array = ['Fundamentos', 'de', 'Programación', 'en', 'Bictia']
console.log(my_array);



console.log(my_array.map(word => {                                      //map()
    var reverse = "";
    for(var i = word.length - 1; i >= 0; i--){
        reverse = reverse.concat(word[i]);
    }
    return reverse;
}));