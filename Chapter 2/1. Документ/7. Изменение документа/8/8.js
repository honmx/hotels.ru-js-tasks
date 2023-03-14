const inner = `<li>2</li><li>3</li>`;
const firstLi = document.getElementById("one");

firstLi.insertAdjacentHTML("afterend", inner);