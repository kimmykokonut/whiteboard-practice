//Prob #1 
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

const numArray = Array.from({length: 999}, (_, index) => index + 1);

const filtArray = numArray.filter(num => 
  num % 3 === 0 || num % 5 === 0);

const sumArray = filtArray.reduce(
  (accumulator, element) => accumulator + element, 0,
);
console.log(sumArray);
/*
let sum = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
*/
