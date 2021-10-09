function circleOfNumbers(n, firstNumber) {
    const distance = n / 2;
    const oppositeNumber = firstNumber + distance
    if (oppositeNumber >= n) {
        return oppositeNumber - n;
    }
    return oppositeNumber
}
