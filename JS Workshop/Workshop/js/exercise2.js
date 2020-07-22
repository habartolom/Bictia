const button = document.getElementById("register_btn").addEventListener("click", register);
var records = [];

calculate = () =>{
    var temp = 0;
    records.forEach(element => temp+=element);
    return temp;
}

function register(){
    var payment = parseInt(document.getElementById("payment_input").value);
    var loan = parseInt(document.getElementById("loan_input").value) * -1;
    
    if(!isNaN(payment)){
        records.push(payment);
        document.getElementById("payment_input").value = "";
    }

    if(!isNaN(loan)){
        records.push(loan);
        document.getElementById("loan_input").value = "";
    }

    document.getElementById("answer_container").lastElementChild.innerHTML="Total: " +calculate();
}