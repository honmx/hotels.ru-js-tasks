const createUl = () => {
  const ul = document.createElement("ul");
  document.body.append(ul);

  while (text = prompt("add text for li elem:")) {
    const li = document.createElement("li");
    li.textContent = text;
    ul.append(li);
  }
}

createUl();