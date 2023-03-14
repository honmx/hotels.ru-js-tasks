const spy = function (func) {
  const calls = [];
  return function wrapper(a, b) {
    wrapper.calls = calls;
    calls.push(`${a},${b}`);
    return func.call(this, a, b);
  }
}

function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args ); // "call:1,2", "call:4,5"
}