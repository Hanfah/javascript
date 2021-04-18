//write a javascript function to sort the following array
//of objects by title value

//step 1. create an array of objects of theses books
//step 2. define a function that takes in an argument
//of x and y. x being the highest and y being the lowest
//step 4. inside the function declare if x is less then y then
//make the bottom of the last start at the top
//if x  is greater then y then start the list at the top.
// return 0 if eather is the same
//execute the list

var books = [{author: 'Bill Gates', title: "The Road Ahead", libraryID: 1254},
             {author: 'Steve Jobs', title: "Walter Isaacson", libraryID: 4264},
             {author: 'Suzanne Collins', title: "Mockingiay: The Final Book of the hunger games", libraryId: 3245}
];

function sortByTitleValue(x, y){

	if (x.title < y.title)
		return -1;
	if (x.title > y.title)
		return 1;
	return 0;
	
}

console.log(books.sort(sortByTitleValue));