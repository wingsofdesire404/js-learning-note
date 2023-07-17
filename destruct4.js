const regularPerson = {
	firstName: "Bill",
	lastName: "Wilson",
	spouse: {
		firstName: "Phil",
		lastName: "Wilson"
	}
};

const lordify = ({ spouse: { firstName } }) => {
	console.log(`${firstName} of Canterbury`);
}; // dig firstName out of spouse then out of regularPerson

lordify(regularPerson); // Phil of Canterbury
