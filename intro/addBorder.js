function addBorder(picture) {
    var topBottom = [];
    var newArr = [];
    for (let i = 0; i < picture[0].length + 2; i++) {
        topBottom.push('*')
    }
    for (let i = 0; i < picture.length; i++) {
        var line = picture[i].split('');
        line.splice(0, 0, '*')
        line.push('*')
        newArr.push(line.join(''));
    }
    newArr.splice(0, 0, topBottom.join(''));
    newArr.push(topBottom.join(''));
    return newArr;
}
