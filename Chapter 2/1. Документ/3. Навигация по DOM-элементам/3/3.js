const table = document.body.firstElementChild.firstElementChild;

for (let tr of table.children) {
  for (let td of tr.children) {
    if (tr.sectionRowIndex === td.cellIndex) td.style.backgroundColor = "red";
  }
} 