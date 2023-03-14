const btns = document.querySelectorAll(".remove-button");

btns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    this.closest(".pane").remove();
  })
})