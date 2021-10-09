function stringsRearrangement(inputArray) {

    const permArr = permute(inputArray)
    let ret = false
    for (let i = 0; i < permArr.length; i++) {
        if (checkArray(permArr[i])) {
            ret = true;
        }
    }
    return ret;
}

function checkArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (!singleDiff(array[i], array[i + 1])) {
            return false
        }
    }
    return true
}

function singleDiff(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count ++
        }
    }
    if (count > 1 || count === 0) {
        return false;
    }
    return true;
}

function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const remainingNumsPermuted = permute(remainingNums);
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;
}
