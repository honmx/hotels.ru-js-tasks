let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

const JSONMeetup = JSON.stringify(meetup);

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return value === meetup && key != "" ? undefined : value;
}, 2));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/