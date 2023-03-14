// 1 variant
const printNumbersTimeout = (from, to) => {

  setTimeout(function log() {
    console.log(from++);

    if (from > to) return;

    setTimeout(log, 1000);
  }, 1000);
}

// printNumbersTimeout(1, 4)

// 2 variant
const printNumbersInterval = (from, to) => {
  let interval = setInterval(() => {
    console.log(from++);
    if (from > to) clearInterval(interval);
  }, 1000);

}

printNumbersInterval(1, 4)