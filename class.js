function Vacation(destination, length) {
	this.destination = destination;
	this.length = length;
}
// use constructor to create a new class

Vacation.prototype.print = function() {
	console.log(this.destination + " | " + this.length + "days");
};
// add a new method called print
// this.length is equal to self.length in python

const maui = new Vacation("Maui", 7);
maui.print();
