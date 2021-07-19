/** @format */

function register() {
	const name = document.getElementById('card').value;

	let promise = new Promise(function (resolve, reject) {
		setInterval(function () {
			resolve('Your order is successfully placed');
		}, 3000);
	});
	promise.then(function (res) {
		alert(res);
	});
}
function final() {
	clearInterval(interval);
}
var interval = setInterval(final, 2000);
