const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const gallery = document.querySelector(".gallery");
const galleryStyles = getComputedStyle(gallery);

const galleryWidth = 130 * gallery.children.length;

rightArrow.addEventListener("click", (e) => {
  const initialMargin = parseFloat(galleryStyles.marginLeft);
  let marginToSubtract = 390

  console.log(initialMargin - 390);
  console.log(-galleryWidth + 390);

  if (initialMargin - 390 < -galleryWidth + 390) {
    marginToSubtract = 130 * (Math.floor((initialMargin - 390) / (-galleryWidth + 390)))
  }

  if (initialMargin - 390 === -galleryWidth) marginToSubtract = 0;
  
  gallery.style.marginLeft = initialMargin - marginToSubtract + "px";
})

leftArrow.addEventListener("click", (e) => {
  const initialMargin = parseFloat(galleryStyles.marginLeft);
  let marginToAdd = 390;

  if (initialMargin + 390 > 0) marginToAdd = -initialMargin;

  gallery.style.marginLeft = initialMargin + marginToAdd + "px";
})