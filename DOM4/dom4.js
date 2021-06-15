//create a variable to get the element
//create a functiion that will return the length of fruits in the list
//display the length of fruits in the documnet



function countNoOfFruits(dropDown){
	//select the options
	let arrayOfOptions = dropDown.options
	//get the number (length) of fruits recorded on the document
	document.write(arrayOfOptions.length)
//create a loop to loop through the options
//i = 0, if i is less then 0 (which it is), keep counting until we have all the names of fruits listed found
	for(let i = 0; i < arrayOfOptions.length; i++){
		//write all the fruits listed in the document
		document.write(arrayOfOptions[i].value);




	}


}


//create a variable which stores the fruits.
var countFruits = document.getElementById("fruits");
//run the function
countNoOfFruits(countFruits);






