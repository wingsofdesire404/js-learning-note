const messages = [
	"They can be inserted into arrays", // messages[0]
	message => console.log(message), // messages[1]
	"like variables", // messages[2]
	message => console.log(message) // messages[3]
];

messages[1](messages[0]);
messages[3](messages[2]);
