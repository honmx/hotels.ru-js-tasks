const rootUl = document.querySelector("#container ul");

const allLi = rootUl.querySelectorAll("li");

allLi.forEach(li => {
  const count = li.querySelectorAll("li").length;
  if (count > 0) {
    li.firstChild.data += ` [${count}]`
  }
})