const readlineSync = require("readline-sync");

const IN_TO_CM = 2.54;

const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const widthCM = width * IN_TO_CM;
const lengthCM = length * IN_TO_CM;
const perimeter = ((2*widthCM) + (2*lengthCM)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("A(n) "+ width +"-by-"+ length +"-inch sheet of paper has a perimeter of "+ perimeter +" centimeter(s).")
