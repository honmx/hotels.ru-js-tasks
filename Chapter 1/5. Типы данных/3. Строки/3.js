const truncate = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 1) + "…";
  }
  return str;
}

console.log(truncate("Вот, что мне хотелось", 20)) //"Вот, что мне хотело…"

console.log(truncate("Всем привет!", 20)) //"Всем привет!"