function firstDigit(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        if (Number.isInteger(parseInt(inputString[i]))) {
            return inputString[i]
        }
    }
}
