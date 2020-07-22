class User{
    constructor(name, mail, dir, age, occupation, tel){
        this.name = name;
        this.mail = mail;
        this.dir = dir;
        this.age = age;
        this.occupation = occupation;
        this.tel = tel;
    }
}

const name_input =  document.getElementById("name_input");
const mail_input =  document.getElementById("mail_input");
const dir_input =  document.getElementById("dir_input");
const age_input =  document.getElementById("age_input");
const occupation_input =  document.getElementById("occupation_input");
const tel_input =  document.getElementById("tel_input");

function createMessage(alert, message){
    alert.innerText = message;
}

function isEmpty(element){
    let isValid = true;
    let alert = element.nextElementSibling;
    createMessage(alert, "");
    if (element.value == ""){
        createMessage(alert, "El campo se encuentra vacío.");
        isValid = false;
    }
    return isValid;  
}

function isNumeric(element){
    let isValid = true;
    let alert = element.nextElementSibling;
    createMessage(alert, "");
    if (Number.isNaN(Number(element.value))){
        createMessage(alert, "Ingrese un valor numérico.");
        isValid = false;
    }
    return isValid;  
}

function nameIsValid(){
    return isEmpty(name_input);
} 

function mailIsValid(){
    return isEmpty(mail_input);
}

function dirIsValid() {
    return isEmpty(dir_input);
}

function ageIsValid(){
    return isEmpty(age_input) && isNumeric(age_input);
}

function occupationIsValid(){
    return isEmpty(occupation_input);
} 

function telIsValid(){
    return isEmpty(tel_input) && isNumeric(tel_input);
}


function setUser(){
    if(nameIsValid() & mailIsValid()& dirIsValid() & ageIsValid() & occupationIsValid() & telIsValid()){
        var user = new User(name_input.value, mail_input.value, dir_input.value, age_input.value, occupation_input.value, tel_input.value)
        console.log(user);
    }
    
}