const readNumber = () => {
  let num;
  do {
    num = prompt("Введите число: ");
  } while (Number.isNaN(num))
}

readNumber();