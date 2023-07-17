class Vacation {
	constructor(destination, length) {
		this.destination = destination;
		this.length = length;
	}
	
	print() {
		console.log(`${this.destination} will take ${this.length} days`);
	}
}
// inherits Vacation class
// super contains all argument of super class
class Expedition extends Vacation {
	constructor(destination, length, gear) {
		super(destination, length);
		this.gear = gear;
	}

	print() {
		super.print(); // this prints the content of super class
		console.log(`Bring your ${this.gear.join(" and your ")}`); // this prints the content where adding on top
	}
}	

const trip = new Expedition("Mt. Whitney", 3, [
	"sunglasses",
	"prayer flags",
	"camera"
]);

trip.print();
