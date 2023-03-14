const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

let interval;

const setDate = () => {
  const timeArr = new Date().toLocaleTimeString().split(":");

  for (let i = 0; i < clock.children.length; i++) {
    clock.children[i].textContent = timeArr[i];
  }
}

start.addEventListener("click", () => {
  setDate();
  interval = setInterval(setDate, 1000);
})

stop.addEventListener("click", () => {
  clearInterval(interval);
})