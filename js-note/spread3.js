const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = [...peaks].reverse(); // create a copy of peaks then reverse it

console.log(last)
console.log(peaks.join(", ")); // Tallac, Ralston, Rose

