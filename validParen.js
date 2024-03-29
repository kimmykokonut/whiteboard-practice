// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
// å
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.Open brackets must be closed in the correct order.Example:

// Input: "()[]{}"
// Output: true

// Input: "([)]"

// Output: false
const input1 = "()[]{}";
const input2 = "([)]";

const validParens = (string) => {
  let stack = [];
  const open = ['(', '{', '['];
  const close = [')', '}', ']'];
  const pairs = {')': '(', ']':'[', '}':'{'};
  for(let paren of string) {
    if (open.includes(paren)) {
      stack.push(paren);
    } else if (close.includes(paren)) {
      const lastOpenParen = stack.pop();
      if (lastOpenParen !== pairs[paren]){
        return false;
      }
    }
    }
    return stack.length === 0;
  }
console.log(validParens(input1)); //T
console.log(validParens(input2)); //F