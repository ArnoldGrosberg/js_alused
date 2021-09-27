const color = "green";

switch(color) {
	case "red":
		console.log("Stop!");
		break;
	case "yellow":
		console.log("Attention!");
		break;
	case "green":
		console.log("Go!");
		break;
	default:
		console.log("This color is not accepted!");
		break;
}

// loo kuupäeva objekt
// nädalapäeva numbri järgi väljastan mis nädala nimitusega on tegu - eesti keeles
// testi kõiki päevasi

let kuupäev = new Date("11/03/2021");
let nädalapäev = kuupäev.getDay();
console.log(nädalapäev);

switch(nädalapäev) {
	case 1:
		console.log("Esmaspäev");
		break;
	case 2:
		console.log("Teisipäev!");
		break;
	case 3:
		console.log("Kolmapäev");
		break;
	case 4:
		console.log("Neljapäev");
		break;
	case 5:
		console.log("Reede");
		break;
	case 6:
		console.log("Laupäev");
		break;
	case 0:
		console.log("Pühapäev");
		break;
	default:
		console.log("Pole õige nädalapäeva number!");
		break;
}










