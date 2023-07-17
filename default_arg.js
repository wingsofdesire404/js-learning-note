const defaultPerson = {
    name:{
        first: "Shane",
        last: "McConkey"
    },
    favActivity: 'skiing'
};

function logActivity(person = defaultPerson){
    console.log(`${person.name.first} loves ${person.favActivity}`);
}
// . represent {}

logActivity();