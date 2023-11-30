//Problem #1
//Compose a function called paint() and then add it to three different painters.Each painter can only paint with one color.
const paint = (color) => {
  const obj = {
    paints: () => {
      return `Paints ${color}!`;
    }
  }
  return obj;
}
const painter1 = paint("green");
console.log(painter1.paints()); //Paints green!
const painter2 = paint("yellow");
const painter3 = paint("red");
console.log(painter2.paints(), painter3.paints());
//Problem #2
//Compose a function called sound().You should be able to add the following functionality to the items.
const sounds = (noise) => {
  const obj = {
    sound: () => {
      return noise;
    }
  }
  return obj;
}
const faucet = sounds("Drip drip drip");
console.log(faucet.sound());
const oldCar = sounds("Grumble grumble");
console.log(oldCar.sound());
const sleepyBear = sounds("Grrr...yawn");
console.log(sleepyBear.sound());
//Problem #3
//Compose a function called throw ().The throw () function should determine the distance and speed a battle robot can throw a spear.This function should be unary, so you will need to use currying.
//Next, add the throw () function to multiple battle robots.
const throws = (distance) => {
  return (speed) => {
    const obj = {
      throw: () => {
        return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour!`;
      }
    };
    return obj;
  }
}
const battleRobot1 = throws(100)(200);
console.log(battleRobot1.throw());
const battleRobot2 = throws(50)(5);
console.log(battleRobot2.throw());
//Problem #4 First use closures to create three dance moves.
const dances = () => {
  const obj = {
    samba: () => {
      return `The dancer sambas!`;
    },
    tango: () => {
      return `The dancer tangos!`;
    },
    mambo: () => {
      return `The dancer mambos!`;
    }
  };
return obj;
};
const dancer = dances();
console.log(dancer.samba()); //should equal "The dancer sambas!"
console.log(dancer.tango(), dancer.mambo());
console.log(dancer);