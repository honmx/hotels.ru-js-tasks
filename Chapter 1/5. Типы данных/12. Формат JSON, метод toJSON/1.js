let user = {
  name: "Василий Иванович",
  age: 35
};

const JSONUser = JSON.stringify(user);
const userObj = JSON.parse(JSONUser);