module.exports = function reverse (n) {
	
	
	let result = '';

	function getRev() {
		if (result[0] !== '0') {
			result = result.split('').reverse().join('');
		} 

		if (result[0] === '0') {
			result = result.slice(1, result.length);
			result = result.split('').join('');
		}
	}

	if (n === 0) {
		result = n;
	}

	if (n < 0) {
		result = String(n * (-1));
		getRev();
	}

	if (n > 0) {
		result = String(n);
		getRev();
	}
	return result * 1;

}
