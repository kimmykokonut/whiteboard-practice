//Problem #1
//Write a recursive function that reverses the order of words in a sentence.For instance, "I am a cat" should become "cat a am I".
const sentence = "I am a cat";
const yodaTalk = (sentence) => {
  const sentArray = sentence.split(' '); 
  const revArray = (arr) => {
    if (arr.length === 0) {
      return '';
    } else {
      return (revArray(arr.slice(1)) + ' ' + arr[0]);
    }
  }
  return revArray(sentArray).trim();
}
console.log(yodaTalk(sentence));
//Problem #2
//Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function
const rgr = (x) => {
  const str = "red green refactor";
  if (x === 0) {
    return '';
  }
  return rgr(x -= 1) + str + ' ';
}
console.log(rgr(3));
//refactored to include termination conditional with base case
const rgr2 = (x) => { 
  const str = "red green refactor";
  if (isNaN(x) || x <= 0) {
    return '';
  }
  return rgr(x - 1) + str + ' ';
}
console.log(rgr2('hi'));
console.log(rgr2(0));