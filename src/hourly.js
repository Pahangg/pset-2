const readlineSync = require("readline-sync");

const hourlywage = Number(readlineSync.question("\nHourly wage: "));

const monday = Number(readlineSync.question("\nMonday: "));
const tuesday = Number(readlineSync.question("Tuesday: "));
const wednesday = Number(readlineSync.question("Wednesday: "));
const thursday = Number(readlineSync.question("Thursday: "));
const friday = Number(readlineSync.question("Friday: "));
const saturday = Number(readlineSync.question("Saturday: "));
const sunday = Number(readlineSync.question("Sunday: "));

const hours = (monday+tuesday+wednesday+thursday+friday+saturday+sunday);

const money = (hours * hourlywage).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("You'll make $"+ money+" this week.")
