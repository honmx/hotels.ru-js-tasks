function pow(x, n) {

  if (x === 1) return x;
  if (n === 0) return 1;
  if (n < 1) return "error";

  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(3, 3));