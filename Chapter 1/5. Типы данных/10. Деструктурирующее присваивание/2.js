const topSalary = (salaries) => {
  let result = null;
  
  for (let [name, salary] of Object.entries(salaries)) {
    if (!result || salary > salaries[result]) result = name;
  }

  return result;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

console.log(topSalary(salaries));