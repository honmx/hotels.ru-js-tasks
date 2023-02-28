const getMiddleIndex = (arr) => {
  return Math.floor((arr.length - 1) / 2);
}

// =======

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
let middleIndex = getMiddleIndex(styles);
styles[middleIndex] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Рэгги");