const API_URL = "https://api.github.com/users/Devendra0106";

const getData = async () => {
	//fetch returns readable stream
	const response = await fetch(API_URL);
	const data = await response.json();
	console.log(data);
};

getData().catch((err) => console.log(err));
