const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let strArr1 = s1.split('');
  let strArr2 = s2.split('');
  let counter = 0;
  for (let i = 0; i < strArr1.length; i++) {
	for (let j = 0; j < strArr2.length; j++) {
		if(strArr1[i] === strArr2[j]){
			counter++;
			strArr1.splice(i,1);
			strArr2.splice(j,1);
			j--;
			i--;
		}	
	}	
  }
  return counter;
}
// console.log(getCommonCharacterCount('abce', 'aabcg'))
module.exports = {
  getCommonCharacterCount
};
