const getRandomInt = (min, max) => {
  const transformedMin = min - 0.5;
  const transformedMax = max + 0.5;

  // all ints have approximately the same amount of appearing
  return Math.round(Math.random() * (transformedMax - transformedMin) + transformedMin);
  
  // ints 1 and 5 have 2 times smaller chance to appear
  // return Math.round(Math.random() * (max - min) + min);
}

const checkResults = () => {
  const results = {}
  
  for (let i = 0; i < 100000; i++) {
  
    const result = getRandomInt(1, 5);
    if (results[result]) results[result]++;
    else results[result] = 1;
  }

  return results;
}

console.log(checkResults())