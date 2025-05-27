// Select Elements 
const navbarBtn = document.getElementById("navbarBtn");
const nav = document.getElementById('navgation');
const filter = document.getElementById('filter');
const productsContainer = document.getElementById('products-container');

// Naviagtion Button 
navbarBtn.addEventListener('click', function () {
    nav.classList.toggle('show')
})
// Logout Button 
document.getElementById('logout').addEventListener('click', function () {
	localStorage.removeItem("user");
	// Page redirection 
	window.location.href = "./index.html";
})


// fetch data 
let allProducts = [];

async function fetchData() {
		try {

		let resp =await fetch ('https://fakestoreapi.com/products');
		let data = await resp.json(); 

		// repeat products to get 100 product
		allProducts= Array(100).fill(data).flat();

		const categories = [...new Set(allProducts.map(product => product.category))];
		filterProducts(categories);
		displayProducts(allProducts);
	} 

	// catch Error 

	catch (error) {
		console.error('Error fetching data:', error);
		productsContainer.innerHTML = '<p>Error loading products. Please try again later.</p>';
	}
}


// Filter Buttons 
function filterProducts(category) {

	const allBtn = document.createElement('button');

	allBtn.addEventListener('click', () => {
		displayProducts(allProducts);
	});
	// Append Elements /
	filter.appendChild(allBtn);
	// Create Button filter
	category.forEach(element => {
		const btn = document.createElement('button');

		btn.className = 'btn btn-dark mx-1 my-1';

		btn.textContent = element;

		btn.addEventListener('click', () => {

			const filteredProducts = allProducts.filter(product => product.category === element);

			displayProducts(filteredProducts);
		});

		filter.appendChild(btn);

	});
}
// display products 
function displayProducts(products) {

	productsContainer.innerHTML = '';

	products.forEach(product => {

		const productCard = document.createElement('div');

		productCard.className = 'col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center';
		// display cards 
		productCard.innerHTML = `
		<div class="card" style="width: 18rem; height:27rem;">
			<img src="${product.image}" alt="${product.title} " class="card-img-top h-50" >
			 <div class="card-body">
			 <h5 class="card-title ">${product.title}</h5>
			 <p class="card-text text-success fw-bold">$${product.price}</p>
		 <button type="button" class="btn btn-outline-dark btn-add-card">Add to Card</button>
		  </div>
 </div>`;

		productsContainer.appendChild(productCard);

	});
}
fetchData();
