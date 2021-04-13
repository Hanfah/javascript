//write a javascript program to remove duplicate items from an array
//for this example i will be using numbers

/*define a function that takes in an array
-define a variable to store our array of unique values, we set the default to an empty array
-loop through the array passed into the function 
and check if the item in our loop is currently in our array of unique values variable
-if it's not, let's put it there (that means it's unique since 
we'll only put it there if it's not already there)
-when the function finishes running, returning the array of unique values*/

function removeDuplicates(array){
	var a = [1, 2, 3, 5, 3, 3];
	var b = [];
	var len = a.length;

	for (var i = 0; i < len; i++){
		if(b.indexOf(a[i]) === -1){
			b.push(a[i]);
		}
	}

	return b;


}

console.log(removeDuplicates());

/*let a = [1, 8, 8, 8, 9, 6];
obj = {};

for(let i of a){
	obj[i] = true;
}*/



//console.log(obj);
