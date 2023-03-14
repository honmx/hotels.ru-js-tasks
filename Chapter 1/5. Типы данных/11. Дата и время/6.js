const getSecondsToday = (date) => {
  const dayBeginning = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  return Math.floor((date.getTime() - dayBeginning.getTime()) / 1000);
}

console.log(getSecondsToday(new Date()));