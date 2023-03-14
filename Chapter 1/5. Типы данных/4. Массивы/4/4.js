const sumInput = () => {
  const numbers = [];
  let num;
  do {
    num = prompt("Введите число: ");
    if (!Number.isNaN(parseFloat(num))) numbers.push(+num);
  } while(!Number.isNaN(parseFloat(num)))

  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumInput());