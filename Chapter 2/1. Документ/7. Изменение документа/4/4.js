const createTree = (container, data) => {
  const ul = Object.keys(data).length !== 0 ? document.createElement("ul") : null;

  for (let category in data) {
    const li = document.createElement("li");
    ul.append(li);
    li.textContent = category;
    const innerUl = createTree(container, data[category]);
    if (innerUl) li.append(innerUl);
  }

  return ul;
}

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },
  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const container = document.getElementById("container");
container.append(createTree(container, data));