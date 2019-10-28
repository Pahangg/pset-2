const readlineSync = require("readline-sync");

const s = Number(readlineSync.question("\nStudents: "));
const t = Number(readlineSync.question("Teachers: "));
const cap = Number(readlineSync.question("Bus capacity: "));

let total = (s + t);
let bn = Math.floor((total/cap) + 1);

console.log("\n" + bn + " bus(es) is (are) needed, with " + (total % cap) + " passenger(s) on the last bus.");
