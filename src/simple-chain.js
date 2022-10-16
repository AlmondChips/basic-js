const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
	if(value === undefined) this.chain.push(' ')
	else this.chain.push(`${value}`);
	
	return this;
  },
  removeLink(position) {
	position--;
	if((position % 1) !== 0 || position < 0 || position > this.chain.length-1 || typeof position !== 'number'){
		this.chain = [];
		throw Error('You can\'t remove incorrect link!')
	} 
	else this.chain.splice(position,1);
	
   return this;
  },
  reverseChain() {
	this.chain.reverse();
   return this;
  },
  finishChain() {
	const chainCopy = [...this.chain]
	this.chain = [];
    return "( " + chainCopy.join(' )~~( ') +" )";
  }
}


// console.log(chainMaker.addLink(function () { }).addLink(null).finishChain())

module.exports = {
  chainMaker
};
