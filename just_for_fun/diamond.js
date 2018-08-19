function diamond(n) {
	let top = '';
	let middle = '';
	let bottom = '';
	if (n <= 0 || n % 2 == 0) {
		return null;
	} else {
		for (let i = 1; i <= n; i++) {
			middle += '*';
			if (i == n) {
				middle += '\n';
			}
		}
		for (let j = 1; j < n; j += 2) {
			top += ' '.repeat((n - j) / 2) + '*'.repeat(j) + '\n';
		}
		for (let k = n - 2; k >= 1; k -= 2) {
			bottom += ' '.repeat((n - k) / 2) + '*'.repeat(k) + '\n';
		}
		return top + middle + bottom;
	}
}

console.log(diamond(process.argv[2]));
