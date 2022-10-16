const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let result = '';
const arr = str.split('');
let currentLetter = ''

let pointer = 0;
for (let i = 0; i < arr.length; i++) {
	currentLetter = arr[i];
	pointer++;
	if(currentLetter !== arr[i+1]){
		result += genStr(currentLetter, pointer);
		pointer = 0;
	}
}

return result;
  function genStr(letter, number){
	if(number > 1){
		return ''+number+letter;
	}
	else return letter;
  }
}


// console.log(encodeLine(''));
module.exports = {
  encodeLine
};
