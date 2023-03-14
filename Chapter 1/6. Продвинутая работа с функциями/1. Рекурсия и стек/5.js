// 1 variant
const printReversedListWithRecurse = (list) => {
  if (list.next) printReversedListWithRecurse(list.next);
  console.log(list.value);
}

// 2 variant
const printReversedListWithCycle = (list) => {
  let listCopy = JSON.parse(JSON.stringify(list));
  const values = [];
  while (listCopy) {
    values.push(listCopy.value);
    listCopy = listCopy.next;
  }
  values.reverse().forEach(value => console.log(value));
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printReversedListWithRecurse(list);
console.log("==");
printReversedListWithCycle(list);