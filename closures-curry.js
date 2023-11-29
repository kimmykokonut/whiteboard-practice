//Problem #1
//Use a closure to create multiple functions for adding a prefix to a name.The prefix could be Doctor, Duchess, Sir, and so on.
const addPrefix = (pre) => {
  return (name) => {
    return `Hello, ${pre} ${name}.`;
  }
}
const prefixSir = addPrefix("Sir");
const greeting = prefixSir("Henry"); //Hello Sir Henry.
console.log(greeting);
//Problem #2
//Use a closure to create multiple functions for making various animal noises.
const soundMaker = (noise) => {
  return (animal) => {
    return `The ${animal} goes ${noise}!`;
  }
}
const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");
console.log(lionSound("lion"));
console.log(mouseSound("mouse"));
//Problem #3(Harder)
//Use closures to create multiple functions for adding both a prefix and a suffix to a name.
const nameEnhancer = (pre) => {
  return (suffix) => {
    return `Ciao ${pre} John ${suffix}.`;
  }
}
const misterJunior = nameEnhancer("Mister")("Junior");
console.log(misterJunior); //Mister John Junior
const duchessThird = nameEnhancer("Duchess")("The Third");
console.log(duchessThird); //add 3rd param for name?
//Problem #4 (Harder)
//Use closures to create multiple functions to first add to and then multiply a value. 
const addaMult = (addNum) => {
  return (multNum) => {
    return (value) => {
      return ((value + addNum) * multNum);
    }
  }
}
const addTwoMultThree = addaMult(2)(3);
console.log(addTwoMultThree(5)); //5+2 * 3 = 21
const addFiveMultNine = addaMult(5)(9);
console.log(addFiveMultNine(5));//5+5 * 9 = 90