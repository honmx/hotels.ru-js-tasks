const field = document.getElementById("field");
const ball = document.getElementById("ball");

field.addEventListener("click", (e) => {
  const fieldCords = field.getBoundingClientRect();

  const [newX, newY] = findNewCords(field, fieldCords, ball, e);
  ball.style.left = newX  + "px";
  ball.style.top = newY + "px";
});

const findNewCords = (field, fieldCords, ball, e) => {
  let newX = newY = 0;

  newX = e.clientX - fieldCords.left - field.clientLeft - ball.offsetWidth / 2;
  newY = e.clientY - fieldCords.top - field.clientTop - ball.offsetHeight / 2;
  
  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;
  if (newX > field.clientWidth - ball.offsetWidth) newX = field.clientWidth - ball.offsetWidth;
  if (newY > field.clientHeight - ball.offsetHeight) newY = field.clientHeight - ball.offsetHeight;

  return [newX, newY]
}