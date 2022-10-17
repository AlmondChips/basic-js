const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 let repeatTimes = options.repeatTimes ?? 1;
 let additionRepeatTimes = options.additionRepeatTimes ?? 1;
 let separator = options.separator ?? '+';
 let addition = options.addition ?? '';
 let additionSeparator = options.additionSeparator ?? '|';
 let str1 = str.toString();

 let additionSubString = '';
//  Create addition substring
for (let i = 0; i < additionRepeatTimes; i++) {
	additionSubString += addition+additionSeparator;
	
 }

 additionSubString = additionSubString.substring(0,additionSubString.length-additionSeparator.length);

 let finalStr = '';
//  Create final string
for (let i = 0; i < repeatTimes; i++) {
	finalStr += str1+additionSubString+separator;

	
}

finalStr = finalStr.substring(0,finalStr.length-separator.length)


return finalStr;
}

console.log(repeater('STRING', { repeatTimes: 3, separator: '+', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))

module.exports = {
  repeater
};
