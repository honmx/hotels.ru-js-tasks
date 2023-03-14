// 1 variant
const printListWithRecurse = (list) => {
  console.log(list.value);
  if (list.next) printListWithRecurse(list.next);
}

// 2 variant
const printListWithCycle = (list) => {
  let listCopy = JSON.parse(JSON.stringify(list));
  while (listCopy) {
    console.log(listCopy.value);
    listCopy = listCopy.next;
  }
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

printListWithRecurse(list);
console.log("==");
printListWithCycle(list);