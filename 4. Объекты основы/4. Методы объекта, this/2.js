let calculator = {
  read(num1, num2) {
    if (typeof num1 === "string" ||
        typeof num2 === "string") {
          console.log("wrong input type");
          return;
        }
    this.num1 = num1;
    this.num2 = num2;
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
}

calculator.read(9, 5);
console.log(calculator.sum());
console.log(calculator.mul());