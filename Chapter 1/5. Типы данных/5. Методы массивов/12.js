function unique(arr) {
  const result = [];

  for (let elem of arr) {
    if (!result.includes(elem)) result.push(elem);
  }

  return result.join(", ");
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O