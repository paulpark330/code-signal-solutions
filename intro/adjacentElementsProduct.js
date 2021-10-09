function adjacentElementsProduct(inputArray) {
    const newArr = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        newArr.push(product)
    }
    newArr.sort((a, b) => a - b)
    return newArr[newArr.length - 1];
}
