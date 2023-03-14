// works fine
function MyObject() {
  this.name = "aaa";
}

const obj = new MyObject();
let obj2 = new obj.constructor();

console.log(obj);
console.log(obj2);
console.log("=======");



// works wrong
function MyObject2() {
  this.name = "bbb";
  this.constructor = function() {}
}

const objj = new MyObject2();
let objj2 = new objj.constructor();

console.log(objj);
console.log(objj2);
console.log("=======");

// or
function MyObject3() {
  this.name = "bbb";
}

MyObject3.prototype = null;

const objjj = new MyObject3();
let objjj2 = new objjj.constructor();

console.log(objjj);
console.log(objjj2);