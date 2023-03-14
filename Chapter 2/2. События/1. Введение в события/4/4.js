const menu = document.querySelector("p");
const list = document.querySelector("ul");

menu.addEventListener("click", () => {
  list.classList.toggle("active");
})