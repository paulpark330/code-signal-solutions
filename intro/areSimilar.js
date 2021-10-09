function areSimilar(a, b) {
    var indices = totalDifferences(a, b)
    var firstIndex = indices[0];
    var secondIndex = indices[1];
    if (indices.length === 0) {
        return true;
    } else if (indices.length !== 2) {
        return false;
    } else {
        var temp = a[firstIndex];
        a[firstIndex] = a[secondIndex];
        a[secondIndex] = temp;
        return isEqualArray(a, b)
    }
}

function totalDifferences(a, b) {
    var differenceIndex = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            differenceIndex.push(i);
        }
    }
    return differenceIndex;
}

function isEqualArray(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
