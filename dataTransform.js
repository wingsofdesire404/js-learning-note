const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

console.log(schools.join(", "));

const wSchools = schools.filter(school => school[0] === "W"); // filter schools array whose component has "W" ahead of it

console.log(wSchools);

const cutSchool = (cut, list) => list.filter(school => school !== cut);

console.log(cutSchool("Washington & Liberty", schools).join(", "));

console.log(schools.join("\n"));
