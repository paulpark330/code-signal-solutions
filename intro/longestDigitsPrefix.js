function longestDigitsPrefix(inputString) {
    const strArray = inputString.split('');
    const newArray = [];
    if (!Number.isInteger(parseInt(strArray[0]))) {
        return "";
    }
    for (let i = 0; i < strArray.length; i++) {
        if (Number.isInteger(parseInt(strArray[i]))) {
            newArray.push(strArray[i])
        } else {
            break;
        }
    }
    return newArray.join('')
}
