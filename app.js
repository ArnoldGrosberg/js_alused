/*
if(tingimus) {     if puhul
	// tegevused if puhul
} else {
	// tegevused else puhul
}	
*/
const id = 100;

// == võrdub
// != Ei võrdu
// === võrdub ja tüǘbikontroll
// !== Ei võrdu ja tüübikontroll


let testId;

console.log(testId);

/*
if(typeof testId !== undefined){
	console.log(`id on ${testId}`);
} else {
	console.log("Vale");
}
*/


/*
// > Ja <
if(id >100){
	console.log(`id on ${id} - suurem kui 100`)
} else{
	console.log(`id on ${id} - väiksem või võrdne 100`)
}
*/


/*
// if - else if - else
const color = "blue";

if(color=="red"){
	console.log("Stop!");
} else if (color == "yellow"){
	console.log("Attention!");
} else if (color == "green"){
console.log("Go!");
} else {
	console.log('Color is not accepted!');
}
*/

// and - &&
const name = "Kadi";
const age = 70;

if(age >0 && age <= 12){
	console.log(`${name} on laps`);
} else if (age > 12 && age < 18){
	console.log(`${name} on nooruk`);
} else {
	console.log(`${name} on täiskasvanud`);
}


// or = ||
if(age < 18 || age > 65){
	console.log(`${name} ei saa registreerida`)
} else {
	console.log(`${name} on registreeritud`);
}

// ? - ternary operaator
console.log(id === 100 ? 'Õige' : 'vale');

// ilma ()
if(id === 100) 
	console.log('Korras');
else 
	console.log("Ei ole korras");