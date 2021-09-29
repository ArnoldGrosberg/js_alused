// elementi looming
const list = document.querySelector('ul');

// classi määramine
const li  = document.createElement('li');
li.className = 'collection-item';

// texti lisamine,
li.appendChild(document.createTextNode('Study element creation'));

const link  = document.createElement('a');
link.className = 'secondary-content';
link.appendChild(document.createTextNode('X'));
// lisan atribuut väärtusega #
link.setAttribute('href', '#');
// lisan elemendi
list.appendChild(link);

// elemendi lisamine teise elemendi sisse
list.appendChild(li);

console.log(link);