//Metodos String

console.log('********** Métodos de String **********');

var js = "   Estoy aprender Javascript   ";
console.log(js);

js = js.replace('er', 'iendo');                     //replace()
console.log(js);

js = js.trim(' ');                                  //trim()
console.log(js);

console.log(js.slice(-10));                         //slice()


var index = js.indexOf('Javascript')                //indexof()
console.log(console.log(js.charAt(index)));         //charAt()

js = js.concat(' en Bictia');                       //concat()
console.log(js);

var strArray = js.split(' ');                       //split()
console.log(strArray);

index = js.indexOf('Bictia');
console.log(js.substring(index));                   //substring()



//Métodos Arrays

console.log('********** Métodos de Arrays **********');
function testParImpar(number){
    var test = "Es Impar"
    if (number % 2 == 0){
        test = "Es Par"
    }
    return test;
}

function getRandom(){
    return Math.ceil(Math.random()*100);
}

var numbers = [];
var numbers2 = [];

for (i = 0; i < 10; i++){
    numbers.push(getRandom());
}

for (i = 0; i < 5; i++){
    numbers2.push(getRandom());                                             //push()
}

console.log(numbers);

numbers.sort( (a,b) => a-b);                                                //sort()
console.log(numbers);

numbers.forEach(number => console.log(number, testParImpar(number)));       //forEach()

console.log(numbers.concat(numbers2));                                      //concat()

console.log(numbers.find(element => element % 2 == 0));                     //find()

