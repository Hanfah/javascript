//write a javascript program to delete a property from an object

//step 1. create an object of names
//step 2. declare a function
//step 3. within the function use the delete method to delete the property
//step 4. return students
//step 4. Execute the function with a console.log,

var Students = {

    name: "Tim",
	Course: "javascript",
	Level: "Master"

};

function deleteAProperty(delete_level){
	delete delete_level["Level"];
	return Students;

}
console.log(deleteAProperty(Students));