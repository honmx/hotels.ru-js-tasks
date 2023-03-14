const user = prompt("Кто там?");

if (user === "Админ") {
  const password = prompt("Пароль?");

  if (password === "Я главный") {
    console.log("Здравствуйте");
  } else if (!password) {
    console.log("Отменено");
  } else {
    console.log("Я вас не знаю");
  }

} else if (!user) {
  console.log("Отменено");
} else {
  console.log("Я вас не знаю");
}