const filterRangeInPlace = (arr, min, max) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]