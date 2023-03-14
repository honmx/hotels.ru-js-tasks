const getSecondsToTomorrow = (date) => {
  const nextDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0);
  
  return Math.ceil((nextDay.getTime() - date.getTime()) / 1000);
}

console.log(getSecondsToTomorrow(new Date()));