const countdown = (value, fn) => {
	fn(value);
	return value > 0 ? countdown(value - 1, fn): value;
};

countdown(10, value => console.log(value)); // here fn is a function that print the cur valuethat only takes one argument
