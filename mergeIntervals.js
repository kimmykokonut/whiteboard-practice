// Merge Intervals

// Given an array of intervals intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non - overlapping intervals that cover all the intervals in the input.

//   Example:

// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// // Explanation: Intervals [1,3] and [2,6] overlap, so they are merged into [1,6].
const input = [[1, 3], [2, 6], [8, 10], [15, 18]];

const mergeInt = (array) => {
  if (array.length <= 1) return array;
  //initialize empty list
  const output = [];
  // sort based on start value
  array.sort((a, b) => a[0] - b[0]);
  let currentInterval = array[0];

  for (let i = 1; i < array.length; i++) {
    const nextInt = array[i];

    if (currentInterval[1] >= nextInt[0]) {
      //merge
      currentInterval[1] = Math.max(currentInterval[1], nextInt[1]);
    } else {
      //not overlapping
      output.push(currentInterval);
      currentInterval = nextInt;
    }
    // if (array[i][0] < array[i+1][0]) {
    //   if (array[i][1] < array[i+1][1]) {
    //     output.push([array[i][0], array[i+1][1]]);
    //   } else {
    //     output.push([array[i][0], array[i][1]]);
    //   }
  }
  //push last interval
  output.push(currentInterval);
  return output;
};

console.log(mergeInt(input));