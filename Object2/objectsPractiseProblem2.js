//create an array of people with first name,
//last name, and age. Then write a 
//javascript program to display
//the first name andlast name of 
//all the people

//step 1: declare an array of people 
//with firstname, last name and ages
//step 2: create a function to 
//only display age
//return the array
//execute the object

var People = [
{
	FirstName: "tim",
	LastName: "tom",
	Age: 23
},
{
	FirstName: "King",
	LastName: "Young",
	Age: 34,
},
{
FirstName: "Thomas",
LastName: "Khan",
Age: 30
}
]

function showFirstAndLastName(map){
var firstAndLastName = People.map(People=>{
return (People.FirstName + " " + People.LastName);


};

console.log(showFirstAndLastName(People));