const genres = document.getElementById("genres");

const option = genres.options[genres.selectedIndex];

console.log(option.value);
console.log(option.text);

const newOption = new Option("Классика", "classic", true, true);
genres.append(newOption);