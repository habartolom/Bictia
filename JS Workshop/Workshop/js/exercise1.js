const newTask = document.getElementById("task_input");
const ol = document.getElementsByTagName("ol")[0];
const alert = document.getElementById("alert");

function createMessage(message) {
    alert.innerText = message;
}

function addTask(){
    if(newTask.value != ""){
        createMessage("");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newTask.value));
        ol.appendChild(li);
        newTask.value = "";  
    }
    else
        createMessage("Ingresar una tarea válida.")
}

function removeTask(){
    let tasks = ol.children;
    if(tasks.length > 0){
        createMessage("");
        tasks[tasks.length - 1].remove();
    }
    else
        createMessage("No se puede eliminar tarea");
}