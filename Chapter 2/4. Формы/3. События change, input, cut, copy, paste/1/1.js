const form = document.querySelector("form");
const moneyBefore = document.getElementById("money-before");
const moneyAfter = document.getElementById("money-after");
const heightAfter = document.getElementById("height-after");

form.addEventListener("input", (e) => {

  const initial = Number(form.money.value);
  const months = Number(form.months.value);
  const interest = Number(form.interest.value);
  
  if (!initial) return;
  if (!months) return;
  if (!interest) return;

  let result = Math.round(initial * (1 + interest / 100) ** (months / 12));

  moneyBefore.innerHTML = initial;
  moneyAfter.innerHTML = result;
  heightAfter.style.height = result / initial * 100 + "px";
});