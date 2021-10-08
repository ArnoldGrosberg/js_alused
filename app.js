// event elements
const taskList = document.querySelector('ul')


// click element kustutamiseks
taskList.addEventListener('click', deleteTask);

function deleteTask(e) {
  if (e.target.parentElement == 'Delete All Tasks'){
    if(confirm('Kas oled kindel, et kustutame kõik ülesanded?')){
      e.target.parentElement.remove();
    }
  }else if(e.target.textContent = 'X'){
    if(confirm('Kas oled kindel, et kustutame ülesanne?')){
      e.target.parentElement.remove();
    }
  }

}