//create an object with three items init, then write a javascript
//function that tells you the length (tells you how many items are in it)
//of the object

//step 1. define an object with  items in t
//step 2. white a function that takes in an oject as an argument
//step 3. use the length method to find out how
//many objects are in the item
//step 4. execute the function in a console.log in order
//for the coder to see the printed results

var phone = {model: "motorola", color: "red", camera: "50mp"};

function howManyinLength (phone){

return Object.keys(phone).length;	


}


console.log(howManyinLength(phone));
