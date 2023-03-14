const byField = (field) => {
  return (a, b) => {
    if (a[field] > b[field]) return 1;
    return -1;
  }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

users.sort(byField('name'));
console.log("By name:");
console.log(users);

users.sort(byField('age'));
console.log("By age:");
console.log(users);