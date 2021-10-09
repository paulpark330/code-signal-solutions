function shapeArea(n) {
    const sum = 1;
    if (n === 1) {
        return 1;
    }
    for (let i = 2; i <= n; i++) {
        sum += (i * 4) - 4;
    }
    return sum;
}
