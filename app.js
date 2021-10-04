// elemendi leidmine
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h4');

taskInput.value = "";

// submit
form.addEventListener('submit', runEvent);

// keyboard
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);

// input väljas fokuseerimine ja lahti fokuseerimine
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);

// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);


function runEvent(e) {
  const li = document.createElement('li');
  const list = document.querySelector('ul');

  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');
  link.className = 'secondary-content';
  link.appendChild(document.createTextNode('X'));
  link.setAttribute('href', '#');

  li.appendChild(link);
  list.appendChild(li);

  taskInput.value = "";

  e.preventDefault();
}

function lisaElement(){
  let i = document.getElementById("nupp").submit;
  document.getElementById("ul").innerHTML += `<li>${i}`;
} 



