//write a javascript function to sort the items of an array

//step 1. define an array of items
//step 2. create a function 
//step 2. inside the function return the sort method to sort oout the fruits 
//alphabetically
//execute the function inside a document.write, in order for anyone to see the printed 
//results 

var myFruits = ["oranges", "peach", "pinaple", "Apples", "Plum"];


function sortFruits (array){
	myFruits.sort();
	return myFruits;

}

console.log(sortFruits());
