// event elements
const taskList = document.querySelector('ul')


// click element kustutamiseks
taskList.addEventListener('click', deleteTask);

function deleteTask(e) {
  console.log(e);
if(e.target.textContent = 'X'){
    if(confirm('Kas oled kindel, et kustutame ülesanne?')){
      e.target.parentElement.remove();
    }
  }

}