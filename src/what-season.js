const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	let month;
	if(date === undefined) return 'Unable to determine the time of year!';

	try {
		let tryDate = new Date(Date.prototype.valueOf.call(date));
		if(Object.prototype.toString.call(tryDate) === "[object Date]"){
			month = Date.prototype.getMonth.call(tryDate)
		}
		else throw Error('Invalid date!');
	} catch (e) {
		throw Error('Invalid date!');
	}

 switch (month) {
	case 0: case 1 :case 11:
		return 'winter';
	case 2: case 3: case 4:
		return 'spring';
	case 5: case 6 :case 7:
		return 'summer';
	case 9: case 8 :case 10:
		return 'fall';
 }
}

// console.log(getSeason(new Date(2020, 02, 31)))


// getSeason('foo'),
//                 () => getSeason({ John: 'Smith' }),
//                 () => getSeason(20192701),
//                 () => getSeason([2019, '27', 0 + '1']),
//                 () => getSeason(() => new Date())
module.exports = {
  getSeason
};
