// Group Anagrams

// Given an array of strings strs, group the anagrams together.You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//   Example:

//     Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// // Explanation: The grouped anagrams are:
// // ["bat"] - as "bat" has no anagram.
// // ["nat", "tan"] - as "tan" and "nat" are anagrams of each other.
// // ["ate", "eat", "tea"] - as "ate", "eat", and "tea" are anagrams of each other.
const input = ["eat", "tea", "tan", "ate", "nat", "bat"]

const anagram = (array) => {
  const hash = {};
  for(let word of array) {
    const sortedWord = word.split('').sort().join(); //sort char to make key
    if (hash[sortedWord]) {
      hash[sortedWord].push(word);
    } else {
      hash[sortedWord] = [word];
    }
  }
  return Object.values(hash);
}
console.log(anagram(input));

