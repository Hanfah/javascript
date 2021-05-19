var btn = document.getElementById("Enter");
btn.addEventListener("click", addDataToTable);
var remove = document.getElementById("remove");
remove.addEventListener("click", removeData);


var row = 1;

function addDataToTable(){
	//declare all the element input values that will be involved in the table
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var salary = document.getElementById("salary").value;
	var city = document.getElementById("city").value;
	var bedrooms = document.getElementById("bedrooms").value;

	//declare a variable to hold the table element
	var table = document.getElementById("table");

	//add rows to the table
	var addRow = table.insertRow(row);

	//add a cell to the row
	//add a cell to position 0, 1, 2, 3, and 4
	var cell1 = addRow.insertCell(0);
	var cell2 = addRow.insertCell(1);
	var cell3 = addRow.insertCell(2);
	var cell4 = addRow.insertCell(3);
	var cell5 = addRow.insertCell(4);

	//Add the users input as a html inside of each cell 
	cell1.innerHTML = name;
	cell2.innerHTML = age;
	cell3.innerHTML = salary;
	cell4.innerCell = city;
	cell5.innerHTML = bedrooms;
    //add rows to the table
	row ++;
}

//remove the row that is filled in by the user
function removeData(){
	//delete row at position 1
	//why position 1
	//because when the user adds his or her infomation, the row of data will automatilly go on
	//position 1 of the table
	table.deleteRow(1);

}

