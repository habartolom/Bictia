const name_input = document.getElementById("name_input");
const mail_input = document.getElementById("mail_input");
  
function createMessage(alert, message){
    alert.innerText = message;
}

function nameIsValid() {
    let isValid = false;
    let name = name_input.value.trim().split(" ");
    let alert = name_input.nextElementSibling;

    createMessage(alert, "");

    if (name_input.value == "")
        createMessage(alert, "El campo se encuentra vacío.");
    else if (name.length < 2)
        createMessage(alert, "Ingrese nombre y apellido");
    else
        isValid = true;
    return isValid;
}

function mailIsValid() {
    let isValid = false;
    let alert = mail_input.nextElementSibling;
    let mail = mail_input.value;
    let pointIndex = mail.indexOf(".");
    let arrobaIndex = mail.indexOf("@");

    createMessage(alert, "");

    if (mail == "")
        createMessage(alert, "El campo se encuentra vacío")
    else if (arrobaIndex == -1 && pointIndex == -1)
        createMessage(alert, "Faltan los símbolos '@' y '.' en el correo electrónico");
    else if (arrobaIndex == -1)
        createMessage(alert, "Falta el símbolo '@' en el correo electrónico");
    else if ((pointIndex == -1) || (arrobaIndex > mail.lastIndexOf(".")))
        createMessage(alert, "Falta el símbolo '.' en el correo electrónico");
    else
        isValid = true;

    return isValid;
}


function verifyInfo() {

    let alert = document.getElementById("answer_container").lastElementChild;
    createMessage(alert, "");
    if (nameIsValid() & mailIsValid()) {
        createMessage(alert, "Datos válidos!");
    }

}

