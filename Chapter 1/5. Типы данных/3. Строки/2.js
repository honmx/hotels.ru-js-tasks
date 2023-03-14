const checkSpam = (msg) => {
  if (msg.toLowerCase().includes("viagra") ||
      msg.toLowerCase().includes("xxx")) return true;
  return false;
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))