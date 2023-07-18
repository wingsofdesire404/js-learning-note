const lordify = (firstName, land) => {
    if (!firstName){
        throw new Error("A firstName is required to lordify");
    }
    if (!land){
        throw new Error("A lord must have a land");
    }
    return `${firstName} of ${land}`;
};
// multiple return condition

console.log(lordify("kelly", "Sonoma")); // Kelly of Sonoma
console.log(lordify("Dave")); // ! JAVASCRIPT ERROR