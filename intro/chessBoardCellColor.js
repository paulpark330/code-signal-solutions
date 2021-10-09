function chessBoardCellColor(cell1, cell2) {
    if (isDark(cell1) === isDark(cell2)) {
        return true;
    }
    return false;
}

function isDark(cell) {
    const newArr = [cell[0].charCodeAt(), parseInt(cell[1])]
    if (newArr[0] % 2 === newArr[1] % 2) {
        return true;
    }
}
