const sandwich = {
	bread: "dutch crunch",
	meat: "tuna",
	cheese: "swiss",
	toppings: ["letture", "tomato", "mustard"]
};

let { bread, meat } = sandwich; // using let to perserve var rather replacing them
bread = "garlic";
meat = "turkey";

console.log(bread); // garlic
console.log(meat); // turkey

console.log(sandwich.bread, sandwich.meat);
