const mouse = document.getElementById("mouse");
mouse.tabIndex = 0;

mouse.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      mouse.style.left = mouse.getBoundingClientRect().left + mouse.offsetWidth + "px";
      break;
    case "ArrowLeft":
      mouse.style.left = mouse.getBoundingClientRect().left - mouse.offsetWidth + "px";
      break;
    case "ArrowUp":
      mouse.style.top = mouse.getBoundingClientRect().top - mouse.offsetHeight + "px";
      break;
    case "ArrowDown":
      mouse.style.top = mouse.getBoundingClientRect().top + mouse.offsetHeight + "px";
      break;
  }
})