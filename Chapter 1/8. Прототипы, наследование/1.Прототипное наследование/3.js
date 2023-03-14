let hamster = {
  stomach: [],
  eat(food) {
    this.stomach = [...this.stomach, food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("banana");
lazy.eat("rasberry");
console.log( speedy.stomach ); // apple, banana

console.log( lazy.stomach ); // rasberry 