const showNotification = (cfg) => {
  const div = document.createElement("div");
  div.classList.add("notification", cfg.className || "notification");

  div.style.position = "absolute";
  div.style.top = cfg.top + "px";
  div.style.right = cfg.right + "px";
  div.innerHTML = cfg.html;

  document.body.append(div);

  setTimeout(() => {
    div.remove();
  }, 1500);
}

showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});