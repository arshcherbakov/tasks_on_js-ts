const englishAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const isPanagram = (text) => {
  const arrayChar = Array.from(text);

  for (let char of englishAlphabet) {
    if (!arrayChar.includes(char.toLocaleLowerCase())) {
      return false;
    }
  }

  return true;
};

console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram("Th qquick brown fox jumps ovr th lazy dog"));
