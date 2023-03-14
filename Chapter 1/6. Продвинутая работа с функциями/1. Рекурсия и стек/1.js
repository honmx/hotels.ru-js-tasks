// 1 variant
const sumToWithCycle = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumToWithCycle(100));

// 2 variant
const sumToWithRecurse = (n) => {
  if (n === 1) return 1;
  return n + sumToWithRecurse(n-1);
}

console.log(sumToWithRecurse(100));

// 3 variant
const sumToWithFormula = (n) => {
  return (1 + n) / 2 * n;
}

console.log(sumToWithFormula(100));