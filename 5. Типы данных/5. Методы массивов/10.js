const shuffle = (arr) => {
  arr.sort((a, b) => {
    const random = Math.random();
    if (random < 0.5) return a - b;
    return b - a;
  })
}

let arr = [1, 2, 3];


const check = () => {
  const res = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  }

  for (let i = 0; i < 100000; i++) {
    shuffle(arr);
    res[arr.join("")]++;
  }

  console.log(res);
}

check();