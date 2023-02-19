"use strict";
let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage("Hello Oleh");
console.log(num);

function calc(a, b) {
  return a + b;
}
console.log(calc(4, 3));
console.log(calc(5, 3));
console.log(calc(4, 7));

function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum);
//function expressin
const logger = function () {
  console.log("Hello Oleh");
};

logger();

//стрілочна ф-ція
const calc = (a, b) => {
  return a + b;
};
