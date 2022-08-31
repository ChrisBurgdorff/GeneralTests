/***************************************************************
The only substantial difference between this and the brute
force method is that here, we sort the arrays first (which you
only need to do once). Then what you can do is: start with the 
first element in each array, and then increase the index (and 
value, since it's sorted) on whatever value is lower. Doing the 
opposite (increasing the index on the HIGHER value) would only
INCREASE the difference.

The reason this is better is it's not comparing each value from
Array 1 to every single value in Array 2, but you're only 
"iterating" through both arrays once.

After sorting, this takes O(A + B) time vs O(AB) time for 
brute force. 
(including the sort makes it O(A log A + B log B))

EXAMPLE:
Array1 (after sorting): [1, 2, 11, 15]
Array2 (after sorting): [4, 12, 19, 23, 127, 235]

Start with 1 and 4 (the first element in each array). This gives
us a difference of 3 so that is also our smallest difference so 
far. For the next comparison, incrementing the index of the 
SECOND array will only INCREASE the distance (it would now 
be 1 and 12) so that will do us no good. So instead we will
increment the index on the FIRST array to bring the values 
CLOSER together (or switching the order of the pair giving 
the next increment an opportunity to get closer).


***************************************************************/

const findSmallestDifference = (input1, input2) => {
	input1.sort((a, b) => (a - b));
  input2.sort((a, b) => (a - b));
	var smallestDifference = Math.abs(input1[0] - input2[0]);
  var i = 0;
  var j = 0;
  while (i < input1.length && j < input2.length) {
  	console.log("(" + input1[i] + ", " + input2[j] + ")");
  	if (Math.abs(input1[i] - input2[j]) < smallestDifference) {
      smallestDifference = Math.abs(input1[i] - input2[j]);
    }
    if (input1[i] < input2[j]) {
    	i++;
    } else {
    	j++;
    }
  }
  return smallestDifference;
};