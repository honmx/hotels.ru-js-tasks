const div = document.querySelector(".field");
const textarea = document.createElement("textarea");

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") textarea.blur();
});

div.addEventListener("click", (e) => {
  const text = div.textContent;
  textarea.classList.add(div.className);
  textarea.value = text;
  div.replaceWith(textarea);
  textarea.focus();
});

textarea.addEventListener("focusout", () => {
  textarea.replaceWith(div);
  div.textContent = textarea.value;
});