/* const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
  console.log("All good");
} */
//console.log(hamburger && fries);
/* const hamburger = 3;
const fries = 1;
const cola = 1; */

//console.log(hamburger === 3 && cola && fries);
//&&-логічне і  перевіряє чи 2 обєкта true
/* console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "lgjkbn"); */

/* if (hamburger === 3 && cola === 1 && fries) {
  console.log("All good");
} else {
  console.log("We go to another restaraunt");
} */

//АБО ||
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggest = 3;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggest)) {
  console.log("All good");
} else {
  console.log("We go to another restaraunt");
}

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggest));

/* let jonnReport, alexReport, samReport, mariaReport="done";
console.log (jonnReport|| alexReport|| samReport|| mariaReport); */
//!-no revers operation
console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
