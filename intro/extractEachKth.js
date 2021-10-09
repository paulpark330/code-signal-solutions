function extractEachKth(inputArray, k) {
    if (k === 1) {
        return [];
    }
    let count = 0;
    for (let i = 0; i < inputArray.length; i++) {
        count++;
        if (count === k) {
            inputArray.splice(i, 1);
            count = 1;
        }
    }
    return inputArray;
}
