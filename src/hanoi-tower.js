const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnsSpeed) {
	let Stepts = getSteps(disksNumber);
	const turnsPerSec = turnsSpeed/(60*60)
	const requiredSeconds = Math.floor(Stepts/turnsPerSec);

	function getSteps(disks){
		if(disks === 1) return 1;
		return 2*getSteps(disks-1) + 1;
	}

	return {turns: Stepts, seconds: requiredSeconds}
}

// calculateHanoi(5,4074);

module.exports = {
  calculateHanoi
};
