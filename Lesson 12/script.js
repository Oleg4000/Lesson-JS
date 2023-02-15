"use strict";
if (4 == 9) {
  console.log("Ok!");
} else {
  console.log("Error!");
}

//const num = 50;
/* if (num < 49) {
  console.log("Error");
} else if (num > 100) {
  console.log("Too much");
} else {
  console.log("Ok!");
}

//тернарний оператор
//   1..........2..................3
num === 50 ? console.log("Ok!") : console.log("Error"); */

const num = 50;
switch (num) {
  case 49:
    console.log("False");
    break;
  case 100:
    console.log("False");
    break;
  case 51:
    console.log("Good");
    break;
  default:
    console.log("The all false not today my dear  friend");
    break;
}
