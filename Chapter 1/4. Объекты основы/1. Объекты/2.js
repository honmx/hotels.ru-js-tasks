const isEmpty = (obj) => {
  for (let key in obj) return false;
  return true;
}

const obj = {};
const obj2 = {
  a: 5,
}

console.log(isEmpty(obj));
console.log(isEmpty(obj2));