const div = document.getElementById("text");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  div.remove();
}, {once: true})