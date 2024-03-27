const str = "loveleetcode";

// const firstUniqChar = (str) => {
//   let strArr = str.split('');
//   for (i=0; i < strArr.length; i++) {
//     if (strArr[i] !== strArr[i + 1]) {
//       return i;
//     } else {
//       return -1;
//     }
//   }
// }

// let answer = firstUniqChar(str);
// console.log(answer);

const firstUChar = (str) => {
  let charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }
  return -1
}

let answer = firstUChar(str);
console.log(answer);