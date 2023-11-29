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