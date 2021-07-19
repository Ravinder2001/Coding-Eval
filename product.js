/** @format */
let products = [
	{
		name: 'One Plus 9 5G',
		price: 49999,
		brand: 'One Plus',
		image: 'https://m.media-amazon.com/images/I/61urU8k2lFL._AC_UY218_.jpg',
	},
	{
		name: 'Tecno Spark 7T',
		price: 9999,
		brand: 'Tecno',
		image: 'https://m.media-amazon.com/images/I/81aWyRY67SS._AC_UY218_.jpg',
	},
	{
		name: 'Samsung Galaxy M31',
		price: 14999,
		brand: 'Samsung',
		image: 'https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg',
	},
	{
		name: 'Realme C11',
		price: 6999,
		brand: 'Realme',
		image: 'https://m.media-amazon.com/images/I/71FYSKYFupS._AC_UY218_.jpg',
	},
	{
		name: 'Redmi 9A',
		price: 6999,
		brand: 'Redmi',
		image: 'https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY218_.jpg',
	},
	{
		name: 'Samsung Galaxy M11',
		price: 9999,
		brand: 'Samsung',
		image: 'https://m.media-amazon.com/images/I/71GQUxuSpnS._AC_UY218_.jpg',
	},
	{
		name: 'Oppo A31',
		price: 12999,
		brand: 'Oppo',
		image: 'https://m.media-amazon.com/images/I/61CnyJ-IbML._AC_UY218_.jpg',
	},
	{
		name: 'Oppo F19 Pro',
		price: 25999,
		brand: 'Oppo',
		image: 'https://m.media-amazon.com/images/I/71nT6xat93L._AC_UY218_.jpg',
	},
	{
		name: 'One Plus Nord CE 5G',
		price: 27999,
		brand: 'One Plus',
		image: 'https://m.media-amazon.com/images/I/71LRBr1aLNS._AC_UY218_.jpg',
	},
	{
		name: 'Realme Narzo 30 Pro',
		price: 15999,
		brand: 'Realme',
		image: 'https://m.media-amazon.com/images/I/81YPGNaaNiS._AC_UY218_.jpg',
	},
	{
		name: 'Redmi Note 9',
		price: 12999,
		brand: 'Redmi',
		image: 'https://m.media-amazon.com/images/I/71X5I1cVfbL._AC_UY218_.jpg',
	},
	{
		name: 'Tecno Spark 7',
		price: 7999,
		brand: 'Tecno',
		image: 'https://m.media-amazon.com/images/I/719b6ihbwZS._AC_UY218_.jpg',
	},
];

localStorage.setItem('products', JSON.stringify(products));

function showProducts(d) {
	let data = d;
	let data_div = document.getElementById('data');
	data_div.innerHTML = null;
	data.forEach(function (el) {
		let div = document.createElement('div');
		let p_name = document.createElement('p');
		p_name.innerHTML = el.name;
		let p_price = document.createElement('p');
		p_price.innerHTML = el.price;
		let p_brand = document.createElement('p');
		p_brand.innerHTML = el.brand;
		let img = document.createElement('img');
		img.src = el.image;
		let btn = document.createElement('button');
		btn.textContent = 'Add to Cart';
		btn.addEventListener('onclick', function () {
			addtocart();
		});
		btn.addEventListener('click', function () {
			addtocart(el);
		});
		div.append(img, p_name, p_price, p_brand, btn);
		data_div.append(div);
	});
}
showProducts(JSON.parse(localStorage.getItem('products')));
function sortLH() {
	let data = JSON.parse(localStorage.getItem('products'));
	data = data.sort(function (a, b) {
		return a.price - b.price;
	});
	showProducts(data);
}
function sortHL() {
	let data = JSON.parse(localStorage.getItem('products'));
	data = data.sort(function (a, b) {
		return b.price - a.price;
	});
	showProducts(data);
}
function addtocart(obj) {
	let arr;
	arr = localStorage.getItem('cart');
	if (arr == null) {
		arr = [];
	} else {
		arr = JSON.parse(localStorage.getItem('cart'));
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].image == obj.image) {
			alert('added');
			obj.pop();
		}
	}
	arr.push(obj);
	localStorage.setItem('cart', JSON.stringify(arr));
}
function cart() {
	window.location.href = 'cart.html';
}
