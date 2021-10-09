function alphabeticShift(inputString) {
    let shiftString = ''
    for ( let i = 0; i < inputString.length; i++) {
        let charCode = inputString[i].charCodeAt()
        if (charCode === 122) {
            shiftString += String.fromCharCode(97)
        } else {
            shiftString += String.fromCharCode(charCode + 1);
        }
    }
    return shiftString;
}
