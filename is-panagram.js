const isPanagram = (text) => {
  const alphabet = {};

  for (let index = "a".charCodeAt(); "z".charCodeAt() >= index; index++) {
    alphabet[String.fromCharCode(index)] = false;
  }

  text
    .toLowerCase()
    .split("")
    .forEach((el) => {
      if (!alphabet[el]) {
        alphabet[el] = true;
      }
    });

  return Object.values(alphabet).every((el) => el);
};

console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram("Th qquick brown fox jumps ovr th lazy dog"));
