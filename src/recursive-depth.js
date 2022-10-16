const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	constructor(){
		this.currentDepth = 1;
		this.maxDepth = 1;
	}

  calculateDepth(arr) {
	
	if(this.currentDepth> this.maxDepth) this.maxDepth++;
	arr.forEach(el => {
		if(el instanceof Array){
			this.currentDepth++;
			this.calculateDepth(el);
			this.currentDepth--;
		}
	});
	
	let copyMax = this.maxDepth;
if(this.currentDepth === 1){
	this.currentDepth = 1;
	this.maxDepth = 1;
}
return copyMax;
  }
}


// let newDeptCalc = new DepthCalculator(0);

// console.log(newDeptCalc.calculateDepth([1, 2, 3, [4, 5]]))

module.exports = {
  DepthCalculator
};
