const plus = document.getElementById("increase");

const lower = document.getElementById("Decrease");

const number = document.getElementById("number");

let integer = 0;

plus.addEventListener("click", addNumber);

lower.addEventListener("click", decreaseNumber)





function addNumber(){
	integer += 1;
	number.innerHTML = integer;
}

function decreaseNumber(){
	integer -= 1;
	number.innerHTML = integer;
}






