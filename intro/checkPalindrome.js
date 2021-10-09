function checkPalindrome(inputString) {
    const reverseString = '';
    for (let i = inputString.length -1; i >= 0; i--) {
        reverseString += inputString[i];
    }
    if (inputString === reverseString) {
        return true;
    } else {
        return false;
    }
}
