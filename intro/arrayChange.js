function arrayChange(inputArray) {
    var counter = 0;
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            counter += inputArray[i - 1] - inputArray[i] + 1
            inputArray[i] = inputArray[i - 1] + 1;
        }
    }
return counter;
}
