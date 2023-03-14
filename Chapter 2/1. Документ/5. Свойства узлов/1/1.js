const rootUl = document.querySelector("ul");

const allLiNodes = rootUl.querySelectorAll("li");
allLiNodes.forEach(li => {
  console.log(li.firstChild.data.trim());
})

console.log(allLiNodes.length);