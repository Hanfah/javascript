// Write a JavaScript program to calculate the factorial of a number

//write a function using num as an argument with the function keyword


function factorial(num){
	//create a variable and set it to 1 because we will start counting from 1
	var result = 1;

	//create a for loop starting at 1. 
	// if i is less then or equal to 1 then do a result * 1 until i has reached up to the 
	//given number which is 5
	for (var i = 1; i<=num; i++){

		// calculate 1 * i
		result = result * i;
	}
//return the result
	return result;
}

//run / execute  the function to find out the factorial of 5 in the document
document.write(factorial(5));


