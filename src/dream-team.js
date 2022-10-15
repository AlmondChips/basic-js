const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if(!Array.isArray(members)) return false;
	let dreamTeam = '';
 for (let i = 0; i < members.length; i++) {
	const name = members[i];
	if(typeof name !== 'string') continue;
	const formatedName = name.trim();
	dreamTeam+= formatedName[0].toUpperCase();	
 }

 	let lettersArray = dreamTeam.split('')
	lettersArray.sort();

	dreamTeam = lettersArray.join('');
	


 return dreamTeam !== '' ? dreamTeam : false;
}

// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))
module.exports = {
  createDreamTeam
};
