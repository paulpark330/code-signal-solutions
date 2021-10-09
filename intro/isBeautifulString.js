function isBeautifulString(inputString) {
  const alphabetHashmap = {};
  for (let i = 0; i < inputString.length; i++) {
    if (alphabetHashmap[inputString[i]] === undefined) {
      alphabetHashmap[inputString[i]] = 1;
    } else {
      alphabetHashmap[inputString[i]]++;
    }
  }
  for (const alphabet in alphabetHashmap) {
    if (alphabet === 'a') {
      continue;
    }
    const prev = String.fromCharCode(alphabet.charCodeAt(0) - 1);
    if (alphabetHashmap[prev] === undefined) {
      alphabetHashmap[prev] = 0;
    }
    if (alphabetHashmap[alphabet] > alphabetHashmap[prev]) {
      return false;
    }
  }
  return true;
}
