const aclean = (arr) => {
  const set = new Set(arr.map(item => item.toLowerCase().split("").sort().join("")));
  return arr.filter(item => {
    const setItem = item.toLowerCase().split("").sort().join(""); 
    return set.has(setItem) && set.delete(setItem);
  });
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"