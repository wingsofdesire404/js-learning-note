fetch("https://api.randomuser.me/?nat=US&results=1")
	.then(res => res.json())
	.then(json => json.results)
	.then(console.log)
	.catch(console.error());

const getFakePerson = async () => {
	try{
		let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
		let { results } = res.json();
		console.log(results);
	} catch(error) {
	  console.log(results);
	}
};

getFakePerson();
