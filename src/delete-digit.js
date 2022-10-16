const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArray = n.toString().split('');
  let arrayCopy = [...numArray];
  arrayCopy.splice(0,1)
  let maxNumber = +(arrayCopy.join(''));

  for (let i = 1; i < numArray.length; i++) {
	let arrayCopy = [...numArray];
	arrayCopy.splice(i,1);
	let number = +(arrayCopy.join(''));
	if(number > maxNumber) maxNumber = number;	
  }
  return maxNumber;
}

// console.log(deleteDigit(5132))
module.exports = {
  deleteDigit
};
