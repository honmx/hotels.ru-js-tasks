const getAverageAge = (users) => {
  return users.reduce((acc, cur) => {
    return acc += cur.age;
  }, 0) / users.length
} 

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28