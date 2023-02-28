function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }

  this.calculate = function(expression) {
    const [a, op, b] = expression.split(" ");

    if (!this.methods[op]) return "no such operaion";
    if (isNaN(a) || isNaN(b)) return "operands are not numbers";

    return this.methods[op](+a, +b);
  }

  this.addMethod = function(op, action) {
    this.methods[op] = action;
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

calc.addMethod("*", (a, b) => a * b);
console.log(calc.calculate("3 * 7")); // 21

calc.addMethod("/", (a, b) => a / b);
console.log(calc.calculate("10 / 2")) // 5

calc.addMethod("**", (a, b) => a ** b);
console.log(calc.calculate("2 ** 3")); // 8

console.log(calc.calculate("5 % 3")) // no such operaion
console.log(calc.calculate("a + b")) // operands are not numbers