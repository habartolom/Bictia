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
    return validateExpReg(/[A-Z]/, "Ingresa al menos una letra mayúscula");
}

function validateLowercase(){
    return validateExpReg(/[a-z]/, "Ingresa al menos una letra minúscula");
}

function validateNumbers(){
    return validateExpReg(/[0-9]/, "Ingresa al menos un dígito");    
}

function validateEspecialCharacteres(){
    return validateExpReg(/\W/, "Ingresa al menos un caracter especial");    
}

function validate(){
    return validateUppercase() && validateLowercase() && validateNumbers() && validateEspecialCharacteres();
}