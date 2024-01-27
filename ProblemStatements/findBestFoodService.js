function findBestService(input) {
	const inputData = JSON.parse(input);
	const serviceData = new Map();

	inputData.forEach(([service, amount]) => {
		if (!serviceData.has(service)) {
			serviceData.set(service, { sum: 0, count: 0 });
		}
		const data = serviceData.get(service);
		data.sum += amount;
		data.count += 1;
	});

	const averages = Array.from(serviceData.entries()).map(([service, data]) => ({
		service,
		average: data.sum / data.count,
	}));

	let max = -Infinity;
	let maxServiceName = "";
	for (let service of averages) {
		if (service.average > max) {
			max = service.average;
			maxServiceName = service.service;
		}
	}
	return maxServiceName;
}

let res = findBestService(
	'[["Swiggy", 123], ["Swiggy", 227], ["Zomato", 103], ["Zomato", 171], ["Dunzo", 131], ["Zomato", 122], ["Swiggy", 181]]'
);
// [
// 	["Swiggy", 123],
// 	["Swiggy", 227],
// 	["Zomato", 103],
// 	["Zomato", 171],
// 	["Dunzo", 131],
// 	["Zomato", 122],
// 	["Swiggy", 181],
// ];

console.log("Best Food service is:", res);
