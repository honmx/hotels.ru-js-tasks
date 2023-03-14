document.addEventListener("click", (e) => {
  const closestA = e.target.closest("a");

  if (!closestA) return;

  !confirm(`are you sure you want to leave for ${closestA.href}?`) && e.preventDefault();
})