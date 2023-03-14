const throttle = (func, ms) => {
  let flag = false;
  let lastArgs;
  let lastThis;

  return function(...args) {
    if (flag) {
      lastArgs = args;
      lastThis = this;
      return;
    };

    flag = true;
    
    setTimeout(() => {
      flag = false;
      if (lastArgs) func.apply(lastThis, lastArgs);
      lastArgs = lastThis = null;
    }, ms);
    
    func.apply(this, args);
  }
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано