const table = document.querySelector("table");
const headers = [...table.querySelectorAll("th")];

const index = headers.indexOf(headers.find(th => th.textContent === "Name"));

const allTr = [...table.children[1].children];

allTr.sort((a, b) => a.firstElementChild.textContent > b.firstElementChild.textContent ? 1 : -1);

table.children[1].innerHTML = "";

allTr.forEach(tr => {
  table.append(tr);
})