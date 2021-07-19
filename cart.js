/** @format */

var data_div = document.getElementById('data1');
function appendlocation(el) {
	var data_div = document.getElementById('data1');

	var div = document.createElement('div');
	let p_name = document.createElement('p');
	p_name.innerHTML = el.name;
	let p_price = document.createElement('p');
	p_price.innerHTML = el.price;
	let p_brand = document.createElement('p');
	p_brand.innerHTML = el.brand;
	let img = document.createElement('img');
	img.src = el.image;

	div.append(p_name, p_price, p_brand, img);
	data_div.append(div);
}
function showcart() {
	let data = JSON.parse(localStorage.getItem('cart'));

	let sum = 0;
	for (let i = 0; i < data.length; i++) {
		sum += +data[i].price;
	}

	document.getElementById('here1').value = sum;
	document.getElementById('here').value = data.length;
	data_div.innerHTML = null;
	data.forEach(function (el) {
		appendlocation(el);
	});
}
showcart();
function show() {
	let code = document.getElementById('here2').value;
	if (code == 'masai30') {
		let data = JSON.parse(localStorage.getItem('cart'));

		let sum = 0;
		for (let i = 0; i < data.length; i++) {
			sum += +data[i].price;
		}

		document.getElementById('here1').value = (sum / 100) * 30;

		data_div.innerHTML = null;
		data.forEach(function (el) {
			appendlocation(el);
		});
	}
}
function checkOut() {
	window.location.href = 'checkout.html';
}
