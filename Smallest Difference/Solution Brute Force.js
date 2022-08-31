//Literally just check all pairs and find the smallest.

const findSmallestDifference = (input1, input2) => {
	var smallestDifference = Math.abs(input1[0] - input2[0]);
	for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input2.length; j++) {
      if (Math.abs(input1[i] - input2[j]) < smallestDifference) {
        smallestDifference = Math.abs(input1[i] - input2[j]);
      }
    }
  }
  return smallestDifference;
};