//write a simple javascript program to join all elements of the following array into a string





//create an array of the colors 
var myColor = ["red","yellow", "pink", "orange"];


//create a function that takes in an array as an argument

function joinAll(array){
	//convert the array into a string
	array.toString("");
	//join the array
	array.join("");
	//return the array
	return array;
}


//execute the function and print out in the document

document.write(joinAll(myColor));
