
let val;

// document.getElementById();

val = document.getElementById("task-title");
val = document.getElementById("task-title").id;
val = document.getElementById("task-title").className;

const taskTitle = document.getElementById("task-title");

// stiili muutmine
taskTitle.style.background = "#333";
taskTitle.style.color = "#333";
taskTitle.style.padding = "5px";
// taskTitle.style.display = "none";


// text content
taskTitle.textContent = "My task";
taskTitle.innerText = "My function Tasks";
taskTitle.innerHTML = "<span style='color:red'></span>";

// document.querySelector
val = document.querySelector('#task-title')
val = document.querySelector('card-title')
val = document.querySelector('h2')


document.querySelector('li').style.color = 'green';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'green';

document.querySelector('li:nth-child').style.color = 'blue';
console.log(val);