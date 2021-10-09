function allLongestStrings(inputArray) {
  let maxString = 0;
  const longestStrings = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxString) {
      maxString = inputArray[i].length;
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxString) {
      longestStrings.push(inputArray[i]);
    }
  }
  return longestStrings;
}
