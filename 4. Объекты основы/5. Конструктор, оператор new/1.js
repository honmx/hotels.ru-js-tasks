const obj = {
  a: 5
}

function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log( a );
console.log( b );
console.log( a == b );