//write a javascript program to remove duplicate items from an array
//for this example i will be using numbers

//step 1. create an array of numbers
//step 2. create a variable to store uniquque values from the 
//array of numbers
//step 3. define a function that returns the unique values
//step 4. execute the function

var numbers = [7, 8, 8, 8, 8, 8, 9];
var uniqueNumbers = new Set(numbers);

function removeDuplicates(array){
	return uniqueNumbers;
}

console.log(removeDuplicates(uniqueNumbers));
