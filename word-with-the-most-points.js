const createAlphabet = () => {
  const alphabet = [];
  let intexArr = 0;

  for (let index = "a".charCodeAt(); "z".charCodeAt() >= index; index++) {
    alphabet[intexArr] = String.fromCharCode(index);
    intexArr++;
  }

  return alphabet;
};

const high = (text) => {
  const alphabet = createAlphabet();

  const arrayWord = text.split(" ");

  let maxBal = 0;
  let wordTop = "";

  for (let word of arrayWord) {
    let sumBal = 0;

    for (let char of word) {
      sumBal += alphabet.indexOf(char) + 1;
    }

    if (sumBal > maxBal) {
      maxBal = sumBal;
      wordTop = word;
    }
  }

  return wordTop;
};

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
console.log(high("me aa ai em"));
