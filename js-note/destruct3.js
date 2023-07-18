const lordify = ({ firstName } ) => {
	console.log(`${firstName} of Canterbury`);
}; // dig firstName out of argument

const regularPerson = {
	firstName: "Bill",
	lastName: "Wilson",
};

lordify(regularPerson); // Bill of Canterbury

