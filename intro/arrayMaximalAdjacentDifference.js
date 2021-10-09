function arrayMaximalAdjacentDifference(inputArray) {
    var maxDifference = 0;
    for (let i = 1; i < inputArray.length; i++) {
        var difference = Math.abs(inputArray[i] - inputArray [i - 1]);
        if (difference > maxDifference) {
            maxDifference = difference;
        }
    }
    return maxDifference;
}
