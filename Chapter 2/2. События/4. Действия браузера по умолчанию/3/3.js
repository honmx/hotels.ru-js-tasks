const gallery = document.getElementById("thumbs");
const mainImg = document.getElementById("largeImg");

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  const a = e.target.closest("a");

  if (!a) return;

  mainImg.src = a.href;
});