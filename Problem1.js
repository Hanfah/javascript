function findLongestWord(str) {
	var words = str.split(" ");
	var longest = "";

	for (var word of words) {
		if (word.length > longest.length) longest = word;
	}

	return longest;
}

	
 


findLongestWord("The longest word is here");