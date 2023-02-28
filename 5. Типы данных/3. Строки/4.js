const extractCurrencyValue = (value) => {
  return +value.slice(1);
}

console.log( extractCurrencyValue('$120') === 120 ); // true