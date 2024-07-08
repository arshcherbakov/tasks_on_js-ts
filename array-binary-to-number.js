const arrayBinaryToNumber = (array) => {
  const radix = 2;
  const binaryNumber = Number(array.join(""));

  return parseInt(binaryNumber, radix);
};

console.log(arrayBinaryToNumber([0, 0, 0, 1]));
console.log(arrayBinaryToNumber([0, 0, 1, 0]));
console.log(arrayBinaryToNumber([0, 1, 0, 1]));
