let color_lawn = {
	title: "lawn",
	color: "#00FF00",
	rating: 0
};

function rateColor(color, rating) {
	color.rating = rating;
	return color;
}
// change the rating of object color then return the object

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5
