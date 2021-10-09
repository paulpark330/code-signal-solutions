function evenDigitsOnly(n) {
  var numArray = ('' + n).split('');
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 1) {
      return false;
    }
  }
  return true;
}
