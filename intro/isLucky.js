function isLucky(n) {
    var ticketNumber = Array.from(String(n), Number)
    var half = (ticketNumber.length / 2);
    var firstHalf = ticketNumber.slice(0, half)
    var secondHalf = ticketNumber.slice(half)
    function sum(array) {
        var sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    if (sum(firstHalf) === sum(secondHalf)) {
        return true;
    }
    return false
}
