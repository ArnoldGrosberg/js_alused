// event elements
const taskList = document.querySelector('ul');
const delAllBtn = document.getElementById('#del-tasks');

// click element kustutamiseks
taskList.addEventListener('click', deleteTask);

delAllBtn.addEventListener('click', deleteTasks);

function deleteTask(e) {
if(e.target.textContent = 'X'){
    if(confirm('Are you sure to delete this task?')){
      e.target.parentElement.remove();
    }
  }
}

function deleteTasks(e) {
// taskList.innerHTML = '';
while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}