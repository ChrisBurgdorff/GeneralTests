/*
There are 100 closed lockers in a hallway. A man begins by opening all 100 lockers.
Next, he closes every second locker.
Then, on his third pass, he toggles every third locker (closes if it is open or opens it if it is closed).
This Process continues for 100 passes such that on each pass i, the man toggles every ith locker.
After his 100th pass in the hallway, in which he toggles only locker # 100, how many lockers are open?
*/
var lockers = "";

//Initialize with 100 "closed" lockers
for (let i = 0; i < 100; i++) {
	lockers += "C";
}

//toggle an individual locker
function toggle(locker) {
	if (locker === 'C') {
  	return 'O';
  }
  return 'C';
}

//Helper function to replace a character in a string at a specific index
String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

//Fucntion to print the output in a readable way
function showOutput(lockers) {
  var outputString = "";
  for (let i = 0; i <= 9; i++) {
  	for (let j = 1; j <= 10; j++) {
      outputString += String( (i*10) + j).padStart(2, '0');
      outputString += ' ';
    }
    outputString += "\n";
    for (let j = 1; j <= 10; j++) {
      outputString += ' ';      
      outputString += lockers[( (i*10) + j - 1)];
      outputString += " ";
    }
    outputString += "\n";
  }
  return outputString;
}

//Actual brute force logic
for (let i = 1; i <= 100; i++) {
	for (let j = 1; j <= 100; j++) {
  	if (j % i == 0) {
      lockers = lockers.replaceAt(j - 1, toggle(lockers[j - 1]));
    }
  }
}

console.log(showOutput(lockers));
