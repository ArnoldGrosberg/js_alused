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

const delAll = document.querySelector('del-Tasks')
// click element kustutamiseks
taskList.addEventListener('click', removeAll);
console.log(delAll);
function removeAll(e) {
  if (confirm('Are you sure you want to delete all task?')) {
    if (e.target.id == 'remAllbtn') {
      taskList.innerHTML = '';
    }
  }
}
