function bishopAndPawn(bishop, pawn) {
  const alphabetToNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  function chessNotation(position) {
    const arr = [];
    arr.push(alphabetToNumber[position[0]]);
    arr.push(parseInt(position[1]));
    return arr;
  }

  const bishopArr = chessNotation(bishop);
  const pawnArr = chessNotation(pawn);

  const diffArr = [Math.abs(bishopArr[0] - pawnArr[0]), Math.abs(bishopArr[1] - pawnArr[1])];
  console.log(diffArr);

  return diffArr[0] === diffArr[1] ? true : false;
}
