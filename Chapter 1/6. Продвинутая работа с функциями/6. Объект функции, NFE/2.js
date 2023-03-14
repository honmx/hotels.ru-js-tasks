const sum = (num) => {

  let result = num;

  function innerSum(num2) {
    result += num2;
    return innerSum;
  }

  innerSum[Symbol.toPrimitive] = function(hint) {
    return result;
  }

  return innerSum;
}

console.log(Number(sum(1)(2))) // 3;
console.log(String(sum(1)(2)(3))) // 6 (string);
console.log(Number(sum(5)(-1)(2))) // 6
console.log(Number(sum(6)(-1)(-2)(-3))) // 0
console.log(Number(sum(0)(1)(2)(3)(4)(5))) // 15