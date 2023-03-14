const field = document.getElementById("field");
const ball = document.getElementById("ball");

ball.style.top = (field.clientHeight / 2 - ball.offsetHeight / 2)+ "px";
ball.style.left = (field.clientWidth / 2 - ball.offsetWidth / 2)+ "px";