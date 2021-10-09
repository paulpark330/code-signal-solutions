function centuryFromYear(year) {
    if (year % 100 === 0) {
        return year /100
    } else {
    const x = Math.floor(year / 100)
    return x +1
    }
}
