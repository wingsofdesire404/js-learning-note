const createScream = logger => message => {
	logger(message.toUpperCase() + "!!!");
};

// argument is logger function, return value is message function which returns what logger function do
