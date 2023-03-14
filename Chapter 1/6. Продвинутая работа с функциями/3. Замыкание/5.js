const inBetween = (a, b) => {
  return (elem, index, arr) => {
    return elem >= a && elem <= b;
  }
}

const inArray = (arrToCompare) => {
  return (elem, index, arr) => {
    return arrToCompare.includes(elem);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2