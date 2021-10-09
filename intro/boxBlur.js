function boxBlur(image) {
    const newArr = [];
    for (let i = 1; i < image.length - 1; i++) {
        const tempArr = [];
        for (let j = 1; j < image[i].length - 1; j++) {
            var sum =
            (image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1]) +
            (image[i][j - 1] + image[i][j] + image[i][j + 1]) +
            (image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1]);
            const average = Math.floor(sum / 9);
            tempArr.push(average)
        }
        newArr.push(tempArr);
    }
    return newArr;
}
