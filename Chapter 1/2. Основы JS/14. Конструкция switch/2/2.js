const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    console.log("Вы ввели число 0");
    break;
  case 1:
    console.log("Вы ввели число 1");
    break;
  case 2:
  case 3:
    console.log("Вы ввели число 2 или 3");
    break;
}