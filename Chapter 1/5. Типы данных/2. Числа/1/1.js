const a = parseFloat(prompt("first num: "));
const b = parseFloat(prompt("second num: "));

if (Number.isNaN(a) || Number.isNaN(b)) console.log("incorrent types");
else console.log(a + b);