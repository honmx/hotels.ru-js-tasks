const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month, 2);
  
  date.setDate(28);
  
  let lastDay = date.getDate();

  while (date.getDate() !== 1) {
    lastDay = date.getDate();
    date.setDate(date.getDate() + 1);
  }

  return lastDay;
}

console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2023, 0)); // 31
console.log(getLastDayOfMonth(2023, 1)); // 28
console.log(getLastDayOfMonth(2023, 3)); // 30