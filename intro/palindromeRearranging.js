/** @format */

function palindromeRearranging(inputString) {
  if (inputString.length === 1) {
    return true;
  }
  var charObj = {};
  for (let i = 0; i < inputString.length; i++) {
    var key = inputString[i];
    if (charObj[key] !== undefined) {
      charObj[key]++;
    } else {
      charObj[key] = 1;
    }
  }
  if (inputString.length % 2 === 0) {
    for (var key in charObj) {
      if (charObj[key] % 2 === 1) {
        return false;
      }
    }
  } else {
    var odd = 0;
    for (var key in charObj) {
      if (charObj[key] % 2 === 1) {
        odd++;
      }
      if (odd > 1) {
        return false;
      }
    }
  }
  return true;
}
