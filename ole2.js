const name = "Tallic";
const elevation = 9738;
const print = function() {
	console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};

const funHike = { name, elevation, print }; // let name, elevation, print parts of funHike class
funHike.print(); 
