const table = document.querySelector("table");

table.addEventListener("click", (e) => {
  const index = [...e.target.parentElement.children].indexOf(e.target);
  const type = e.target.dataset.type;
  
  const trs = [...table.tBodies[0].children];
  
  trs.sort((a, b) => {
    const aValue = a.children[index].textContent; 
    const bValue = b.children[index].textContent; 
    if (type === "string") {
      return aValue.localeCompare(bValue);
    }
    if (type === "number") {
      return aValue - bValue;
    }
  });

  table.tBodies[0].append(...trs);
})