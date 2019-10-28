const readlineSync = require("readline-sync");

const annual= Number(readlineSync.question("\nAnnual salary: "));

const tax1= 0.07;
const tax2= 0.157;
const tax3= 0.0447;
const tax4=  0.062;
const tax5= 0.0145;

const salary= annual * (1-tax1);
const tax= tax2 + tax3 + tax4 + tax5;
let duc2 = (1-tax) * salary;
let th= duc2/24;

th= th.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour take-home pay check will be $" + th + ".");
