let list = [{ title: "Red Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = function(title, colors) {
	colors.push( {title: title }); // push color charactor into selected array components
	return colors;
};

console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // 4

const new_add_color = (title, array) => array.concat({ title });

console.log(new_add_color("Glam Green", list).length); // 4
console.log(list.length); // 3

const addColor = (title, list) => [...list, { title }];
