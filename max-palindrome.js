// Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

//   Example:

// Input: "babad"
// Output: "bab" or "aba"
// // Explanation: Both "aba" and "bab" are valid answers.
const input = 'babad';

// const maxPal = (string) => {
//   let output = '';
//   let length = string.length;
//   let left = 1
//   let map = Map();
//   for(let left = 1; left<string.length; left++){
//     if (string[left-1] === string[left+1]){
//       //put l-1, l, l+1 into output
//       //compare length to map lenght? keep longest as output
//     }
//   }
//   return output;
// }
// 
const longestPal = (s) => {
  if (s.length < 2) {
    return s;
  }
  let start = 0, maxLength = 1;
  for (let i = 0; i < s.length; i++) {
    expandCenter(s, i-1, i+1); //odd
    expandCenter(s, i, i+1); //even
  }
  return s.substring(start, start + maxLength)

  function expandCenter(s, left, right){
    while (left >= 0 && right < s.length && s[left] === s[right]){
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
}
console.log(longestPal(input));