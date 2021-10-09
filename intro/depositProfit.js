function depositProfit(deposit, rate, threshold) {
    let year = 0;
    let account = deposit;
    while (account < threshold) {
        let increase = (account * rate / 100);
        account += increase;
        year++;
    }
    return year
}
