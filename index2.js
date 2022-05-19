let myPoints = 3;

function addPoints() {
	myPoints += 3;
}

function remove1Point() {
	myPoints -= 1;
}

addPoints();
addPoints();
addPoints();
remove1Point();
remove1Point();

console.log(myPoints);
