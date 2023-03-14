const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.remove();
}, {once: true})