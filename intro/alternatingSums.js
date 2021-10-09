function alternatingSums(a) {
    var teamOne = [];
    var teamTwo = [];
    var teamOneSum = 0;
    var teamTwoSum = 0;
    var returnArr = [];
    for (let i = 0; i < a.length; i ++) {
        if (i % 2 === 0) {
            teamOne.push(a[i]);
        } else {
            teamTwo.push(a[i]);
        }
    }
    for (let i = 0; i < teamOne.length; i++) {
        teamOneSum += teamOne[i];
    }
    for (let i = 0; i < teamTwo.length; i++) {
        teamTwoSum += teamTwo[i];
    }
    returnArr.push(teamOneSum, teamTwoSum);
    return returnArr;
}
