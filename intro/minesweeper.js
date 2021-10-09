function minesweeper(matrix) {
  const finalMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    finalMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      finalMatrix[i].push(checkMine([i, j], matrix));
    }
  }
  return finalMatrix;
}

function checkMine(coordinate, matrix) {
  const y = coordinate[0];
  const x = coordinate[1];
  let count = 0;

  if (matrix[y - 1] && matrix[y - 1][x - 1]) count++;
  if (matrix[y - 1] && matrix[y - 1][x]) count++;
  if (matrix[y - 1] && matrix[y - 1][x + 1]) count++;
  if (matrix[y] && matrix[y][x - 1]) count++;
  if (matrix[y] && matrix[y][x + 1]) count++;
  if (matrix[y + 1] && matrix[y + 1][x - 1]) count++;
  if (matrix[y + 1] && matrix[y + 1][x]) count++;
  if (matrix[y + 1] && matrix[y + 1][x + 1]) count++;
  return count;
}
