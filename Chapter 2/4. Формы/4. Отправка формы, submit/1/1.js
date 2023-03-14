const form = document.querySelector("form");

{/* <div id="prompt-form-container">
<form id="prompt-form">
<div id="prompt-message">Введите что-нибудь...
  <br>Пожалуйста..</div>
<input name="text" type="text">
<input type="submit" value="Ok">
<input type="button" name="cancel" value="Отмена">
</form>
</div> */}

const showPrompt = (html, callback) => {
  const div = document.createElement("div");
  div.id = "prompt-form-container";
  div.innerHTML = `
    <form id="prompt-form">
    <div id="prompt-message">${html}</div>
    <input name="text" type="text">
    <input type="submit" value="Ok">
    <input type="button" name="cancel" value="Отмена">
    </form>
  `;
  document.body.append(div);

  const formPrompt = div.querySelector("form");

  formPrompt.addEventListener("submit", () => callback(formPrompt.text.value));

  formPrompt.cancel.addEventListener("click", () => {
    formPrompt.submit();
    callback(null)
  });

  let firstElem = formPrompt.text;
  firstElem.focus();

  let lastElem = formPrompt.cancel;

  firstElem.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault();
      lastElem.focus();
    }
  })

  lastElem.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      firstElem.focus();
    }
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  showPrompt("Type something", (value) => {
    alert(value);
  })

  e.target.text.value = "";
});