const readlineSync = require("readline-sync");

let homework = Number(readlineSync.question("\nEnter three homework grades.\n"));
homework = homework + Number(readlineSync.question());
homework = homework + Number(readlineSync.question());

let quiz = Number(readlineSync.question("\nEnter three quiz grades.\n"));
quiz = quiz + Number(readlineSync.question());
quiz = quiz + Number(readlineSync.question());

let test = Number(readlineSync.question("\nEnter three test grades.\n"));
test = test + Number(readlineSync.question());
test = test + Number(readlineSync.question());

const weightedhomework = ((homework/3)*0.15);
const weightedquiz = ((quiz/3)*0.35);
const weightedtest = ((test/3)*0.50);
const grade = (weightedhomework+weightedquiz+weightedtest).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour marking period grade is "+ grade + "%.")
