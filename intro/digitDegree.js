function digitDegree(n) {
    let count = 0;
    let nArray = Array.from(String(n), num => Number(num));
    if (n < 10) {
        return count;
    }
    for (; count < 10; count++) {
        let sum = nArray.reduce((x, y) => x + y);
        nArray = Array.from(String(sum), num => Number(num))
        if (sum < 10) {
            return ++count;
        }
    }

}
