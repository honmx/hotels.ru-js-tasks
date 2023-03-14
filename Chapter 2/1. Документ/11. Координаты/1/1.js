const field = document.getElementById("field");

const cords = field.getBoundingClientRect();

// left top
console.log(Math.round(cords.left), Math.round(cords.top));

// right bottom
console.log(Math.round(cords.right), Math.round(cords.bottom));

// left top inner
console.log(Math.round((cords.width - field.clientWidth) / 2 + cords.left), Math.round((cords.height - field.clientHeight) / 2 + cords.top));

// right bottom inner
console.log(Math.round(cords.right - (cords.width - field.clientWidth) / 2), Math.round(cords.bottom - (cords.height - field.clientHeight) / 2));