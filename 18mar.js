// Product of Array Except Self

// Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

//   Constraints: Do your best to complete this without a nested loop

// Example:

// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Explanation: The product of array except self for each position is calculated as follows:
// output[0] = 2 * 3 * 4 = 24
// output[1] = 1 * 3 * 4 = 12
// output[2] = 1 * 2 * 4 = 8
// output[3] = 1 * 2 * 3 = 6

//input: arry 'nums' of n int, n>1
//output: array, product of elements
//edgecases: nan, n<=1, wrong datatype

//plan: initialize empty array, for loop through array, take values, compute, push to new array, return new array.

const productArr = (array) => {
  if (!Array.isArray(array)) {
    return "Error";
  }
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i <array.length, i++;) {
    newArr[i]
  }
}