function Accumulator(startingValue) {

  this.value = startingValue;

  this.read = function(a) {
    this.value += a;
  }
}

const accumulator = new Accumulator(0);

accumulator.read(5);
accumulator.read(7);
accumulator.read(2);
console.log(accumulator.value);
accumulator.read(100);
console.log(accumulator.value);