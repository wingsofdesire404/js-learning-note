let color_lawn = {
	title: "lawn",
	color: "#00FF00",
	rating: 0
};

const rateColor = function(color, rating) {
	return Object.assign({}, color, { rating: rating });
};

// Object.assign copies argument color to a new object and change the rating

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 0
