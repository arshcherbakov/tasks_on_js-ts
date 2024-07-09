const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const high = (text) => {
  const arrayWord = text.split(" ");

  let maxBal = 0;
  let wordTop = "";

  for (let word of arrayWord) {
    let sumBal = 0;

    for (let char of word) {
      sumBal += alphabet[char];
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
