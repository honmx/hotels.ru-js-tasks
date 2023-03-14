function createCalendar(elem, year, month) {
  const days = {
    0: "пн",
    1: "вт",
    2: "ср",
    3: "чт",
    4: "пт",
    5: "сб",
    6: "вс"
  }
  
  let table = document.createElement("table");
  let tableHeader = document.createElement("tr");
  tableHeader.className = "table-header";

  for (let i = 0; i < 7; i++) {
    let td = document.createElement("th");
    td.textContent = days[i];
    tableHeader.append(td);
  }

  table.append(tableHeader);
  const title = document.createElement("h1");
  title.className = "table-title";
  title.textContent = `This is the calendar for ${year}, ${month+1}`;
  elem.innerHTML = "";
  elem.append(title);
  elem.append(table);

  let date = new Date(year, month, 1);

  let tr;

  while (date.getMonth() === month) {
    let arrOfTr = [...table.querySelectorAll(".week")];

    if (arrOfTr.length === 0 || [...arrOfTr[arrOfTr.length-1].children][6].textContent !== "") {
      tr = document.createElement("tr");
      tr.className = "week";

      for (let i = 0; i < 7; i++) {
        let td = document.createElement("td");
        tr.append(td);
      }

      arrOfTr.push(tr);
    }

    let currentWeek = arrOfTr[arrOfTr.length-1];
    let day = date.getDay();

    if (day === 0) [...currentWeek.children][6].textContent = date.getDate();
    else [...currentWeek.children][date.getDay()-1].textContent = date.getDate();
    table.append(tr);

    date = new Date(year, month, date.getDate()+1);
  }
}

const calendar = document.querySelector(".calendar-wrapper");
const btn = document.querySelector(".calendar-btn");

btn.onclick = () => {
  const container = document.querySelector(".container");
  const input = document.querySelector("input");
  let [year, month] = input.value.split(" ");
  
  createCalendar(calendar, +year, +month-1);
  container.style.padding = "15px 50px";
}