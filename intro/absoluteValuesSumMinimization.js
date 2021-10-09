function absoluteValuesSumMinimization(a) {
    let min = Number.MAX_VALUE;
    let index = 0;
    for (let i = 0; i < a.length; i++) {
        let output = a[0]
        let totalDiff = 0;
        for (let j = 0; j < a.length; j++) {
            let diff = Math.abs(a[i] - a[j])
            totalDiff += diff;
        }
        if (totalDiff < min) {
            min = totalDiff;
            index = i;
        }
    }
    return a[index];
}
