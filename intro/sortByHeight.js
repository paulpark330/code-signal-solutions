function sortByHeight(a) {
    var people = [];
    var heightOrder = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            people.push(a[i])
        }
    } heightOrder = people.sort((a, b) => a - b)
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a.splice(i , 1, heightOrder[0])
            heightOrder.splice(0, 1)
        }
    }
    return a;
}
