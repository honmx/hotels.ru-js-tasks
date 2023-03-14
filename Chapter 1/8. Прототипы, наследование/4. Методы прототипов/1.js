let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
  value: function() {
    return Object.keys(this).join(",");
  }
})

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

console.log(dictionary.toString()); // "apple,__proto__"