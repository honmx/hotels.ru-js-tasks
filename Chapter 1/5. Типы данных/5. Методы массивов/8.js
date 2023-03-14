let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  id: user.id,
  fullName: user.name + " " + user.surname,
}));



console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин
console.log( usersMapped ) 
/*
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
*/