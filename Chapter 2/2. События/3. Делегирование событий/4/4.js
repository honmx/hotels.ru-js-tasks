const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

document.addEventListener("mouseover", (e) => {
  if (!e.target.dataset.tooltip) return;

  document.body.append(tooltip);

  const cords = e.target.getBoundingClientRect();

  tooltip.innerHTML = e.target.dataset.tooltip;

  let top = cords.top - tooltip.offsetHeight - 5;
  let left = cords.left - (tooltip.offsetWidth - cords.width) / 2;

  if (top < 0) top = cords.bottom + 5;
  if (left < 0) left = cords.left;

  tooltip.style.top = top + "px";
  tooltip.style.left = left + "px";
});

document.addEventListener("mouseout", (e) => {
  if (!e.target.dataset.tooltip) return;
  tooltip.remove();
})