const pass = document.getElementById("pass_input");

function createMessage(alert, message) {
    alert.innerText = message;
}

function validateExpReg(expReg, msg){
    
    let alert = pass.nextElementSibling;
    let isValid = expReg.test(pass.value);
    createMessage(alert, "");
    
    if(!isValid)
        createMessage(alert, msg);

    return isValid;
}

function validateUppercase(){
    return validateExpReg(/[A-Z]/, "No hay letras mayúsculas");
}

function validateLowercase(){
    return validateExpReg(/[a-z]/, "No hay letras minúsculas");
}

function validateNumbers(){
    return validateExpReg(/[0-9]/, "No hay números");    
}

function validateEspecialCharacteres(){
    return validateExpReg(/\W/, "No hay caracteres especiales");    
}

function validate(){
    return validateUppercase() && validateLowercase() && validateNumbers() && validateEspecialCharacteres();
}