const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 5));