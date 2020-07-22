
const name_input = document.getElementById("name_input");
const mail_input = document.getElementById("mail_input");
const dir_input = document.getElementById("dir_input");
const age_input = document.getElementById("age_input");
const occupation_input = document.getElementById("occupation_input");
const tel_input = document.getElementById("tel_input");

class User {
    constructor() {
        this.name = name_input.value;
        this.mail = mail_input.value;
        this.dir = dir_input.value;
        this.age = age_input.value;
        this.occupation = occupation_input.value;
        this.tel = tel_input.value;
    }
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

function isValidNumeric(element) {
    let isValid = true;
    let alert = element.nextElementSibling;
    createMessage(alert, "");
    if (Number.isNaN(Number(element.value))) {
        createMessage(alert, "Ingrese un valor numérico.");
        isValid = false;
    }
    else if (Number(element.value) <= 0) {
        createMessage(alert, "Ingrese un valor mayor a 0.");
        isValid = false;
    }
    return isValid;
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
    return !isEmpty(name_input) & !isEmpty(mail_input) & !isEmpty(dir_input) & (!isEmpty(age_input) && isValidNumeric(age_input)) & !isEmpty(occupation_input) & (!isEmpty(tel_input) && isValidNumeric(tel_input));
}

function setUser() {
    if (objectIsValid()) {
        var user = new User();
        console.log(user);
        cleanFields();
    }
}