const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(mode){
		this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		this.mode = mode === true || mode === undefined ? true : false;
	}
  encrypt(message, key) {
	if(message === undefined || key === undefined) throw new Error('Incorrect arguments!');
	message = message.toLowerCase();
	key = key.toLowerCase();
	// polish the key to be as same length as message
    while(key.length < message.replace(/ /g,'').length){
		key+= key;
	}
	key = key.substring(0,message.replace(/ /g,'').length)

	let keyPoiter = 0;
	let encrWord ='';
	for (let i = 0; i < message.length; i++) {
		if(message[i] === ' '){
			encrWord += ' ';
			continue;
		}
		else if(!this.alphabet.includes(message[i])){
			encrWord += message[i];
			continue;
		} 
		else{
			let encrIndex = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyPoiter])) %  this.alphabet.length;
			keyPoiter++;
			encrWord += this.alphabet[encrIndex];
		}	
	}
if(this.mode){
	return encrWord.toUpperCase();
}
else return encrWord.toUpperCase().split('').reverse().join('');

	
  }
  decrypt(message, key) {
	if(message === undefined || key === undefined) throw new Error('Incorrect arguments!');
	message = message.toLowerCase();
	key = key.toLowerCase();
	// if(this.mode === false){
	// 	message = message.split('').reverse().join('');
	// }

	while(key.length < message.replace(/ /g,'').length){
		key+= key;
	}
	key = key.substring(0,message.replace(/ /g,'').length)

	let keyPoiter = 0;
	let encrWord ='';
	for (let i = 0; i < message.length; i++) {
		if(message[i] === ' '){
			encrWord += ' ';
			continue;
		} 
		else if(!this.alphabet.includes(message[i])){
			encrWord += message[i];
			continue;
		} 
		else{
			let encrIndex = (this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[keyPoiter]) + this.alphabet.length) % this.alphabet.length;
			keyPoiter++;
			encrWord += this.alphabet[encrIndex];
		}	
	}

	if(this.mode){
		return encrWord.toUpperCase();
	}
	else return encrWord.toUpperCase().split('').reverse().join('');
  }

  
}

let vc = new VigenereCipheringMachine(false);

console.log(vc.decrypt(vc.encrypt('|!','Samelengthkey'),'Samelengthkey'))

module.exports = {
  VigenereCipheringMachine
};
