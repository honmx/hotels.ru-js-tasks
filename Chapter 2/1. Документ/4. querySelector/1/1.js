const table = document.getElementById("age-table");
console.log(table);

const labels = table.querySelectorAll("label");
console.log(labels);

const firstTd = table.querySelector("td");
console.log(firstTd);

const searchForm = document.querySelector('form[name="search"]');
console.log(searchForm);

const firstInput = searchForm.querySelector("input");
console.log(firstInput);

const allInputsInForm = searchForm.querySelectorAll("input");
const lastInput = allInputsInForm[allInputsInForm.length - 1];
console.log(lastInput);