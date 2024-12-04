const inputBox =  document.getElementById('input-box');
const todoList = document.getElementById("task-list");

function addTask() {
    if (inputBox.value = " ") {
        alert("It's Empty! please write your task")
    }
    else{
       let li = document.createElement("li")
       li.innerHTML = inputBox.value;
       todoList.appendChild(li);
       //asigning the multiplication unicode "\u00d7" for cross mark
       let span = document.createElement("span");
       span.innerHTML =  "\u00d7"
    }
    
}