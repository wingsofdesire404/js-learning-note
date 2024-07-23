let date = new Date();

date = date.toLocaleString();
console.log(date);

document.getElementById("myLabel").innerHTML = date;

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();