// Unique Elements in List

// Given an unsorted list of elements, return the same list in the same order but with only unique elements.In other words, remove all duplicate elements in the list and return it in its original order.

//   Constraints: 1 <= list.length <= 10 ^ 6

// Example:

// Level 1: List contains only integers

// Input: [1, 2, 3, 2, 10, 5, 1]
// Output: [1, 2, 10, 5]

// Level 2: List contains both strings and integers

// Input: [1, “1”, 2, 0, 10, “String”, “3”, 3, 3]
// Output: [1, “1”, 2, 0, 10, “String”, “3”, 3]

// Level 3: List contains strings, integers, and bools

// Input: [true, false, true, “true”, 1, 3, “1”]
// Output: [true, false, “true”, 1, 3, “1”]

// Level 4: List contains strings, integers, bools, and objects

// Input: [true, false, true, “true”, 1, 3, “1”, { "a": 1 }, { "a": 2 }]
// Output: [true, false, “true”, 1, 3, “1”, { "a": 1 }, { "a": 2 }]
const input= [1, 2, 3, 2, 10, 5, 1]; 

const uniqueEl = (list) => {
  const output = [];
  for(let i = 0; i < list.length; i++) {
      if (!output.includes(list[i])) {
        output.push(list[i]);
      }
  }
  return output;
  }

console.log(uniqueEl(input)); //Output: [1, 2, 3, 10, 5]
// LEVEL 2
const two = [1, '1', 2, 0, 10, 'String', '3', 3, 3];
const level2 = (list) => {
  const output = [];
  for (let i = 0; i < list.length; i++) {
    if (!output.includes(list[i])) {
      output.push(list[i]);
    }
  }
  return output;
}
console.log(level2(two));

const three = [true, false, true, 'true', 1, 3, '1'];
console.log(level2(three));

const four = [true, false, true, 'true', 1, 3, '1', { 'a': 1 }, { 'a': 2 }];
console.log(level2(four));