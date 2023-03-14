// 1 variant
function makeCounterWithProps() {
  let count = 0;

  function counter() {
    return counter.count++;
  }
  
  counter.count = count;
  counter.set = (value) => {
    counter.count = value;
  }
  counter.decrease = () => {
    return counter.count--;
  }

  return counter;
}

let counter = makeCounterWithProps();

counter.set(10);
counter.decrease();
counter.decrease();
counter.decrease();
console.log( counter() ); // 7
console.log( counter() ); // 8

// 2 variant
function makeCounterWithClosure() {
  let count = 0;

  function counter() {
    return count++;
  }
  
  counter.set = (value) => {
    count = value;
  }
  counter.decrease = () => {
    return count--;
  }

  return counter;
}


let counter2 = makeCounterWithClosure();

counter2.set(10);
counter2.decrease();
counter2.decrease();
counter2.decrease();
console.log( counter2() ); // 7
console.log( counter2() ); // 8