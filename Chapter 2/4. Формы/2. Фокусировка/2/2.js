const table = document.getElementById("bagua-table");
let flag = false;

table.addEventListener("click", (e) => {
  const td = e.target.closest("td");

  if (!td || flag || e.target.tagName === "BUTTON") return;

  flag = true;

  const tdParams = td.getBoundingClientRect();

  const textarea = document.createElement("textarea");
  // textarea.style.width = tdParams.width + "px";
  // textarea.style.height = tdParams.height + "px";
  textarea.style.resize = "none";
  textarea.textContent = td.innerHTML;

  const div = document.createElement("div");
  div.className = "btn-container";
  
  const btnOK = createBtn("ok", "OK");
  const btnCancel = createBtn("cancel", "Cancel");

  btnOK.onclick = () => {
    flag = false;
    td.innerHTML = textarea.value;
    textarea.remove(); 
  }

  btnCancel.onclick = () => {
    flag = false;
    div.remove();
    textarea.remove();
  }

  div.append(btnOK, btnCancel);

  td.append(div);
  td.append(textarea);
});

const createBtn = (className, value) => {
  const btn = document.createElement("button");
  btn.className = className;
  btn.innerHTML = value;
  return btn;
}