const name = "Arnold Grosberg";
const age = 17;
const job = "Tartu kutsehariduskeskuse õpilane";
const linn = "Tartu";

let html;

html = '<ul>' +
			'<li>' + name + '</li>' +
			'<li>' + age + '</li>' +
			'<li>' + job + '</li>' +
			'<li>' + linn + '</li>' +
			'</ul>';

// es6 - template string;

html = `
	<ul> 
		<li>Name ${name}</li> 
		<li>Age ${age}</li> 
		<li>Job ${job}</li> 
		<li>City ${linn}</li> 
	</ul>`;

console.log(html);

document.body.innerHTML = html;