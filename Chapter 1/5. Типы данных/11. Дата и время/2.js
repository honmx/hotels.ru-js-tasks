const getWeekDay = (date) => {
  const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  return days[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );  // нужно вывести "ВТ"