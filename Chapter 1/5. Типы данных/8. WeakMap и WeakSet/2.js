let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

const seenMessages = new WeakMap();

seenMessages.set(messages[0], new Date().toLocaleString());