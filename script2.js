
//Create an object, then write a JavaScript function that checks
// whether an object contains the specified key


//create a variable of objects
const student = {
	name:"johney",
	age:28
};

//create a function to check if it has name in student, taking in the object
//as an argument

function checkKey(object){
	let hasKey = 'name' in student;

	//if name in students exist then the output on documents should be key exists
	if (hasKey){
		document.write("key exists");

		//if the key does not exist then the output should state the key does not exist

	} else{
		document.write("key does not exist");
	}
}

//execute the function in the document taking in  the object name in the function

document.write(checkKey(student));