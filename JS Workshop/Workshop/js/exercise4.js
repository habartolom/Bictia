
const name_input = document.getElementById("name_input");
const mail_input = document.getElementById("mail_input");
const dir_input = document.getElementById("dir_input");
const age_input = document.getElementById("age_input");
const occupation_input = document.getElementById("occupation_input");
const tel_input = document.getElementById("tel_input");

function createUser(){
    let user = {
        name: name_input.value,
        mail: mail_input.value,
        dir: dir_input.value,
        age: parseInt(age_input.value),
        occupation: occupation_input.value,
        tel: parseInt(tel_input.value)
    }
    return user;
}

function createMessage(alert, message) {
    alert.innerText = message;
}

function isEmpty(element) {
    let isEmpty = false;
    let alert = element.nextElementSibling;
    createMessage(alert, "");
    if (element.value == "") {
        createMessage(alert, "El campo se encuentra vacío.");
        isEmpty = true;
    }
    return isEmpty;
}

function isPositive(element) {
    let isPositive = true;
    let alert = element.nextElementSibling;
    createMessage(alert, "");
    if (parseInt(element.value) <= 0) {
        createMessage(alert, "Ingrese un valor mayor a 0.");
        isPositive = false;
    }
    return isPositive;
}

function cleanFields() {
    name_input.value = "";
    mail_input.value = "";
    dir_input.value = "";
    age_input.value = "";
    occupation_input.value = "";
    tel_input.value = "";
}

function objectIsValid() {
    return !isEmpty(name_input) & !isEmpty(mail_input) & !isEmpty(dir_input) & (!isEmpty(age_input) && isPositive(age_input)) & !isEmpty(occupation_input) & (!isEmpty(tel_input) && isPositive(tel_input));
}

function setUser() {
    if (objectIsValid()) {
        var user = createUser();
        console.log(user);
        cleanFields();
    }
}