'use strict';
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

function getIndex(a) {
	return alpha.indexOf(a);
}

function run(word) {
	var parts = word.split('');
	console.log(parts);
	for (var p = parts.length - 1; p >= 0; --p) {
		// console.log(parts[p]);
		for (var i = getIndex(parts[p]); i >= 0; --i) {
			parts[p] = alpha[i];
			console.log(parts.join(''), alpha[p]);
		}

	}
}

run('someCrazyword');
