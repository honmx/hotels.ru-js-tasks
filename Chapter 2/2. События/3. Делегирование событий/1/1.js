const container = document.getElementById("container");

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("remove-button")) return;

  const pane = e.target.closest(".pane");
  pane.remove();
})