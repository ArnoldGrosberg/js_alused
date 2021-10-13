// event elements
const taskList = document.querySelector('ul');
const delAllBtn = document.getElementById('#del-tasks');
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
// submit 
form.addEventListener('submit', addToList)
function addToList(e) {
  const li = document.createElement('li');
  const list = document.querySelector('ul');

  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');
  link.className = 'secondary-content'
  link.appendChild(document.createTextNode('X'));
  link.setAttribute('href', '#')

  console.log(taskList.innerHTML.element);
  localStorage.setItem(taskList.innerHTML);


  li.appendChild(link);
  list.appendChild(li);

  taskInput.value = '';
  e.preventDefault();
}

// click element kustutamiseks
taskList.addEventListener('click', deleteTask);

delAllBtn.addEventListener('click', deleteTasks);

function deleteTask(e) {
if(e.target.textContent = 'X'){
    if(confirm('Are you sure to delete this task?')){
      e.target.parentElement.remove();
      localStorage.removeItem(e.target.parentElement);

    }
  }
}

function deleteTasks(e) {
// taskList.innerHTML = '';
while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.clear();
}

