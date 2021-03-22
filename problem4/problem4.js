let word = 'mom';

function isItPalindrome(paramStr){
	//split it
	let splittedReversedJoined = paramStr.split('')
	//reverse it 
	.reverse()
	//join it
	.join('')
	//compare it with param
	if(splittedReversedJoined === paramStr) return true;
	return false;

}



console.log(isItPalindrome(word))