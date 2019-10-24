const readlineSync = require("readline-sync");

const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const root = Math.hypot(width,length).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("A(n) "+ width +"-by-"+ length +"-inch sheet of paper has a diagnal of "+ root +" inch(es).");
