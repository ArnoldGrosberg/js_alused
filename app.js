// objekt, alati on nimi:väärtus, nimi:väärtus

const person = {
    firstName: "Kati",
    lastName: "Tamm",
    age: 36,
    email: "kadi.tammgmail.com",
    hobbies: ["muusika", "sport"],
    address: {
        city: "Tallinn",
        country: "Harjumaa"
    },
    getBirthYear: function(){
        return 2021 - this.age;
    }
};

let val;

val = person;

// kui on vaja teatud asju objektist
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;

// nii ei saa?
val = person.address.city;


// nii peab olema
val = person.address['city'];

val = person.getBirthYear();

const people = [
    {name: "Kati", age: 36},
    {name: "Mati", age: 33},
    {name: "Mike", age: 23},

];
val = people;

for(let i = 0; i < people.lenght; i + 1){
    console.log(people[i].name);
}

console.log(val);