const readlineSync = require("readline-sync");

const MM_TO_IN = 25.4;

const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");

const widthMM = width * MM_TO_IN;
const lengthMM = length * MM_TO_IN;
const area = (widthMM * lengthMM).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of "+ area +" square millimeter(s).");
