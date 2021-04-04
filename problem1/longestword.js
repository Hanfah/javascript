function findLongestWord(str) {
  //turn the string into an array using the split method
  var words = str.split(" ");
  //create a variable to store the longest word in the empty string
  var longest = "";
//create a loop to loop through the words
  for (var word of words) {
  	//if the length of the current word that we are looping through
  	// is greater then the longest
  	// make longest the longest word
  	if (word.length > longest.length) longest = word;
  }
  //return the longest word
   return longest;

}
// execute the function
//in this example I have used a document.write so the user can see the longest word
document.write(findLongestWord("The longest word in this sentence is in this sentence"));