function isIPv4Address(inputString) {
    var ipArr = inputString.split('.');
    if (ipArr.length !== 4) {
        return false;
    }
    for (let i = 0; i < 4; i++) {
        var num = Number(ipArr[i]);
        if (num.toString() !== ipArr[i]) {
            return false
        }
        if (num < 0 || num > 255 ) {
            return false
        }
    }
    return true;
}
