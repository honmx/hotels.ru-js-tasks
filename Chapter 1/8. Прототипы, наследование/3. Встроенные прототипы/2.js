function f(a, b) {
  console.log( a + b );
}

Function.prototype.defer = function(ms) {
  const initialFunc = this;

  return function(...args) {
    setTimeout(() => {
      initialFunc.apply(this, args);
    }, ms);
  }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// more complicated example
const func = function(phrase) {
  console.log(phrase + " " + this.name);
}

const user = {
  name: "Max",
}

func.defer(2000).call(user, "Hello");