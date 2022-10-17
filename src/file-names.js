const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let copyNames = [...names];

	for (let i = 1; i < copyNames.length; i++) {
		let currentName = copyNames[i];
		let detections = 0;
		for (let j = 0; j < copyNames.length; j++) {		
			let checkedNameBy = copyNames[j];			
			if(currentName === checkedNameBy){
				detections++;
				if(detections > 1){
					checkedNameBy = currentName.slice(0,currentName.length-3)+`(${detections})`;
				}
				else checkedNameBy = currentName+`(${detections})`;
				
				copyNames[i] = checkedNameBy;
				currentName = checkedNameBy;		
			}
			
			if(j+1 === i) j = copyNames.length+1;
			
		}
		
	}

	return copyNames;
}

// console.log(renameFiles(["file", "file", "image", "file(1)", "file","file(1)"]))

module.exports = {
  renameFiles
};
