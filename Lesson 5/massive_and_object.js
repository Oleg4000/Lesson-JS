//massive
const arr = [1, 2, 3];
console.log(arr[1]);
//object

//const obj = { a: 1, b: 2 };
const obj = {
  Anna: 500,
  Alice: 800,
};
console.log(obj);

const arr2 = ["a", "b", "c"];

arr2[10] = "4456";
//console.log(arr2[10]);
console.log(arr2);
const arrObj = {
  a: "a",
  1: "b",
  2: "c",
  abc: {
    def: {
      d: "d",
      df: ["a", "b", "c"],
    },
  },
};
console.log(arr2[1]);
console.log(arrObj[2]);
const b = "b";
//arrObj.b = "13235";
arrObj["b"] = "13235";
console.log(arrObj["b"]);
console.log(arrObj.b);
