// Minimum Window Substring

// Given a string s and a string t, find the minimum window in s that contains all the characters of t in any order.

//   Example:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// // Explanation: The minimum window substring "BANC" contains all the characters of "ABC".
const s = "ADOBECODEBANC"
const t = "ABC"

// const window = (s, t) => {
//   let map = new Map();
//   for (let i=0; i<s.length, i++;) {
//     if (s.contains(t)){
//       return t;
//     } 
//   }
//   //somehow iterate through s, find a or b or c, keep going, once all 3 found, save string to Map as key and length as value.
//   //repeat
//   //return the map value with the shortest length
// }
//Chatgpt answer to look back trhough.
const window = (s, t) => {
  //store char frequencies of string t
  const targetMap = new Map();
  for (const char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }
  let left = 0; //left pointer
  let minWindow = ''; //min window substring
  let minWindowLength = Infinity; //length min.window substring

  let required = t.length;
  
  for (let right=0; right < s.length; right++){
    const char = s[right];
    if (targetMap.has(char)) {
      targetMap.set(char, targetMap.get(char) - 1);
      if (targetMap.get(char) >= 0) {
        required--;
      }
    }
    while (required === 0) {
      if(right - left + 1 < minWindowLength) {
        minWindowLength = right - left + 1;
        minWindow = s.substring(left, right + 1);
      }
      const leftChar = s[left];
      if (targetMap.has(leftChar)) {
        targetMap.set(leftChar, targetMap.get(leftChar) + 1);
        if (targetMap.get(leftChar) > 0) {
          required++;
        }
      }
      left++
    }
  }
  return minWindow;
}
console.log(window(s,t));
