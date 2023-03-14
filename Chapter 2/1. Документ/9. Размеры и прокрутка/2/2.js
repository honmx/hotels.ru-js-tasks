const widthWithScroll = document.body.clientWidth;

document.body.style.overflow = "hidden";

const widthWithoutScroll = document.body.clientWidth;

console.log(widthWithoutScroll - widthWithScroll);