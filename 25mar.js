// lhtp week3 self-study
// Reverse Words in a String

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non - space characters separated by a single space.The input string does not contain leading or trailing spaces, and the words themselves may contain leading or trailing spaces.

//   Example:

// Input: "the sky is blue"
// Output: "blue is sky the"
const input = "the sky is blue"

const reverseWord = (input) => {
  let inputArray = input.split(' ').reverse().join(' ');
  return inputArray;
}
console.log(reverseWord(input));

const reverseRecurse = (input) => {
  const words = input.split(' ');
  if (input.length === 0){
    return '';
  } else {
    let word = words.pop();
    return word + ' ' + reverseRecurse(words.join(' '));
  }
}
console.log(reverseRecurse(input));