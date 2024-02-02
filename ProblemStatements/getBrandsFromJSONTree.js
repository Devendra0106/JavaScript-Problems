// Print all the brand names by traversing through this JSON. (BFS)
// e.g.  Parle, Pepsico, Cadbury, Parle Agro, VB, Pepsi,…

let inventory = [
	{
		brand: "Parle",
		products: [
			{
				brand: "Parle Agro",
				products: [
					{
						brand: "Frooti",
						products: [],
					},
					{
						brand: "Bailey",
						products: [],
					},
				],
			},
		],
	},
	{
		brand: "Pepsico",
		products: [
			{
				brand: "VB",
				products: [
					{
						brand: "Lays",
						products: [],
					},
					{
						brand: "Kurkure",
						products: [
							{
								brand: "Mad Angles",
								products: [],
							},
						],
					},
				],
			},
			{
				brand: "Pepsi",
				products: [],
			},
		],
	},
	{
		brand: "Cadbury",
		products: [],
	},
];

let brands = [];
function getBrandsFromJSONTree(products) {
	for (let product of products) {
		brands.push(product.brand);

		if (product.products.length > 0) {
			getBrandsFromJSONTree(product.products);
		}
	}
	return brands;
}

let res = getBrandsFromJSONTree(inventory);
console.log(res);
