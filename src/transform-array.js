const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if(!(arr instanceof Array)) throw Error('\'arr\' parameter must be an instance of the Array!');
	
	for (const key in arr) {
		if(arr[key] instanceof Object) return arr;
	}
		

	const correctKeys = ['--discard-next','--discard-prev','--double-next','--double-prev']
	let arrCopy = [...arr];
	let check = ['--'];

	// console.log(arrCopy);
	while (check.length !== 0){

	try {
		arrCopy.forEach( (value,index) =>{
			if(correctKeys.includes(value.toString())){
				arrCopy =  transformController(arrCopy,index,value);
			} 
		})
		check = arrCopy.filter(elem => correctKeys.includes(elem.toString()));
	} catch (error) {
		return arrCopy;
	}				
	}

	// console.log(arrCopy,arr);
		return arrCopy.filter(value => value!=='');

	function transformController(array,initialIndex, ChoiseKey){
		switch (ChoiseKey) {
		case '--discard-next':
			 return discardNext(array, initialIndex);		
		break;
		case '--discard-prev':
			 return discardPrev(array, initialIndex);		
		break;
		case '--double-next':
			 return doubleNext(array, initialIndex);	
		break;
		case '--double-prev':
			 return doublePrev(array, initialIndex);
		break;
		
		default:
		break;
		}
	}

	function discardNext(array, initialIndex){
		if(initialIndex === array.length-1){
			array.splice(initialIndex,1);
			return array;
		}
		array.splice(initialIndex,2,'','')		
		return array;
	}

	function discardPrev(array, initialIndex){
		if(initialIndex === 0){
			array.splice(initialIndex,1);
			return	array;	
		} 
		array.splice(initialIndex-1,2)		
		return array;
	}

	function doubleNext(array, initialIndex){
		if(initialIndex === array.length-1){
			array.splice(initialIndex,1);
			return array;
		}
		array.splice(initialIndex,1,array[initialIndex+1])		
		return array;
	}

	function doublePrev(array, initialIndex){
		if(initialIndex === 0){
			array.splice(initialIndex,1);
			return array;
		} 
		array.splice(initialIndex,1,array[initialIndex-1])		
		return array;
	}

}

// console.log(transform(['--discrard-next', { foo: 'bar' } ]))

module.exports = {
  transform
};
