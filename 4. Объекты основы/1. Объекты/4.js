const sumSalaries = (salaries) => {
  let result = 0;

  for (let key in salaries) {
    result += salaries[key];
  }

  return result;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log(sumSalaries(salaries));