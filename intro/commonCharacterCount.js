function commonCharacterCount(s1, s2) {
    let count = 0;
    const s1Arr = s1.split('');
    const s2Arr = s2.split('');

    for (let i = 0; i < s1Arr.length; i++) {
        const index = s2Arr.indexOf(s1Arr[i])
        if (index !== -1) {
            s2Arr.splice(index, 1)
            count++;
        }
    }
    return count;
}
