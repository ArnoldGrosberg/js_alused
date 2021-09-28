 // funktsioonid defineerimine  deklareerimine
function greeting(firstname = 'Kadi', lastname = 'Tamm'){
	/*if (typeof firstname === 'undefined'){
		firstname = 'Kadi';
	}
	if (typeof lastname === 'undefined'){
		lastname = 'Tamm';
	}*/
	return 'Tere. ' + firstname +' ' +lastname;
}
// funktsiooni kutsumine tööle

let greet = (greeting());
console.log(greet);

console.log();
// funktsioon avaldise kujul
const square = function(number = 3){
	return number * number;
}
console.log(square());

// IIFE - Immediately Invokable Function Expression
(function(){
	console.log("function is running");
})();

(function(name){
	console.log("Tere " + name);
})('Anna');

console.log();
// objekti see defineeritud funktsioonid
const todo = {
	add: function(){
		console.log("Add:todo ...");
	},
	edit: function(id){
		console.log(`edit todo ${id}`);
	},
	delete: function(){
		 console.log("Delete todo ...");
	}
}

todo.add();
todo.edit(5);
todo.delete();

























