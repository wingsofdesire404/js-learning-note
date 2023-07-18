const frederick = {
	name: "Frederick Douglass",
	canRead: false,
	canWrite: false
};

const selfEducated = person => ({
	...person,
	canRead: true,
	canWrite: true
});

console.log(selfEducated(frederick));
console.log(frederick);
