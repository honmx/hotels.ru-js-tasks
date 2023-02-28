const formatDate = (date) => {
  const dateNow = Date.now();
  const difference = dateNow - date.getTime();

  if (difference < 1000) {
    return "right now";
  }
  if (difference < 1000 * 60) {
    return `${Math.floor(difference / 1000)} sec ago`;
  }
  if (difference < 1000 * 60 * 60) {
    return `${Math.floor(difference / 1000 / 60)} min ago`;
  }

  return date.toLocaleString();
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );