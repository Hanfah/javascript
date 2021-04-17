//write a javascript function to sort the items of an array

//we have to pass information to our function,
//and that information is saved in the parameter/named variable "array"
/*function sortFruits (array){
    //we will now sort the array that was passed in to our function
return array.sort(function(a, b){
      //sort method is case sensitive, so we're comparing everything
      //using the same case, even tho the user can pass in fruits
      //that are upperCased
      return a.toLowerCase() - b.toLowerCase()
    });
}
//example
var myFruits = ["oranges", "peach", "pinaple", "Apples", "Plum"];
//when we call the function, we have to actually pass information to it
console.log(sortFruits(myFruits))*/
var myFruits = ["peach", "pair", "apple", "plum", "oranges"];
function sortArray (array){
  return array.sort();
}

console.log(sortArray(myFruits));