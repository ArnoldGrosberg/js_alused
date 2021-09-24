const numbers1 = [35,215,-123,0,1359,649370925,687,4351,12];
const numbers2 = new Array(35,535,-123,0,1359,63498770925,657,4151,12);
const fruits = ["õun", "banaan", "apelsiin", "virsik"];
const mixed = 
[2,"Tere!", true, undefined, , null,
 {a1: 1, b:2}, new Date() ];

// console.log(fruits);
// console.log(typeof fruits);
// console.log(mixed);
// console.log(typeof mixed);

let val;

val = numbers1.lenght; // massiivi pikkus
val = Array.isArray(numbers1); // kas on massiiv
val = numbers1[3]; // kindel element
val = numbers1[0];

numbers1[2] = 100; // element lisamine

// console.log(val);
// console.log(numbers1);

val = numbers1.indexOf(0); // elementi jälgimine

// console.log(val);

// numbers1.push(250);  // elementi lisamine lõppu
// console.log(numbers1); 
// numbers1.unshift(250); // elementi maha võtmine
// console.log(numbers1); 
// numbers1.pop(); // viimase elementi maha võtmine


// console.log(numbers1);


// numbers1.slice(1,5); // lõikamine
// console.log(numbers1);

val = numbers1.concat(numbers2); // massiivi liitmine

val = fruits.sort(); // sõnede sorteerimine ja töötab

console.log(numbers1);
// ei oĺe võimalik sorteerida lihtsalt .sort() -iga, peab tegema funktsiooni
val = numbers1.sort(function(x, y){
    return x -y;
}
    );


console.log(val); // massiivi tulemuse väljastamine





























