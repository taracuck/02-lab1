"use strict";

const myName = `Tara Cuckovich`;
const age = 22;
const birthday = `May 14`;
let detroitGC = false;

let lifeEvents = [
  "I was born at the Beaumont in Troy, Michigan",
  "I went to the University of Michigan",
  "I grew up riding horses with my mom, and owned one horse named Laney.",
  "I am a student in the front-end bootcamp and my brother is my teacher :)",
];

if (detroitGC) {
  console.log(
    `My name is ${myName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I am a student at Grand Circus in Detroit, Michigan, but live in Colorado. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(randomNumber);
  if (randomNumber != 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

// extended challenges
let hours = 50;
let wage = 10;
let totalPay = null;

if (hours > 40) {
  let extraHours = hours - 40;
  let regularPay = 40 * wage;
  let extraPay = extraHours * wage * 1.5;
  totalPay = regularPay + extraPay;
} else {
  totalPay = hours * wage;
}
console.log(
  `One week's pay would be $${totalPay} for working ${hours} hours at a $${wage} wage.`
);

let weekCounter = 1;
for (let i = totalPay; i < 1000000; i += totalPay) {
  weekCounter++;
}

console.log(
  `With the same paycheck each week, it would take ${weekCounter} weeks to reach $1,000,000.`
);
