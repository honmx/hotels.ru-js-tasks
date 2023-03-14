const rootUl = document.getElementById("tree");

rootUl.addEventListener("click", (e) => {
  if (e.target.tagName !== "SPAN") return;
  
  const listSibling = e.target.nextElementSibling;
  
  if (!listSibling) return;

  listSibling.classList.toggle("hide");
});