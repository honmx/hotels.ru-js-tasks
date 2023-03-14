const fibonacci = (n) => {
  const results = [1, 1];

  for (let i = 2; i < n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }

  return results[n - 1];
}

console.log(fibonacci(77));