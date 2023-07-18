const lordify = function(firstName){
    return `${firstName} of Canterbury`;
};

console.log(lordify("Dale"));
console.log(lordify("Gail"));

const new_lordify = firstName => `${firstName} of Canterbury`
// = for default value, => for return value
console.log(new_lordify("Dale"));
console.log(new_lordify("Gale"));