//write a javascript function that checks whether a passed string is 
// palindrome or not? 

    function palindrome (word) {
	let len = word.length;
	let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
	let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

	let flip = end.split('').reverse().join('');
	return (start === flip);
}

console.log(palindrome('radar'));
console.log(palindrome('redder'));
console.log(palindrome('window'));
