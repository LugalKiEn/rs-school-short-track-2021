/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
let mineLoc = [];
function replaceBools(matr, bool2) {
  const matrCopy = matr;
  for (let i = 0; i < matrCopy.length; i++) {
    for (let j = 0; j < matrCopy[i].length; j++) {
      let nearMineCount = 0;
      if (
        typeof matrCopy[i][j + 1] !== 'undefined'
        && matrCopy[i][j + 1] === bool2
      ) {
        nearMineCount++;
      }
      if (
        typeof matrCopy[i][j - 1] !== 'undefined'
        && matrCopy[i][j - 1] === bool2
      ) {
        nearMineCount++;
      }
      if (
        i - 1 >= 0
        && typeof matrCopy[i - 1][j] !== 'undefined'
        && matrCopy[i - 1][j] === bool2
      ) {
        nearMineCount++;
      }
      if (
        i - 1 >= 0
        && typeof matrCopy[i - 1][j + 1] !== 'undefined'
        && matrCopy[i - 1][j + 1] === bool2
      ) {
        nearMineCount++;
      }
      if (
        i - 1 >= 0
        && typeof matrCopy[i - 1][j - 1] !== 'undefined'
        && matrCopy[i - 1][j - 1] === bool2
      ) {
        nearMineCount++;
      }
      if (
        i + 1 < matrCopy.length
        && typeof matrCopy[i + 1][j - 1] !== 'undefined'
        && matrCopy[i + 1][j - 1] === bool2
      ) {
        nearMineCount++;
      }
      if (
        i + 1 < matrCopy.length
        && typeof matrCopy[i + 1][j + 1] !== 'undefined'
        && matrCopy[i + 1][j + 1] === bool2
      ) {
        nearMineCount++;
      }
      if (
        i + 1 < matrCopy.length
        && typeof matrCopy[i + 1][j] !== 'undefined'
        && matrCopy[i + 1][j] === bool2
      ) {
        nearMineCount++;
      }
      mineLoc.push([i, j, nearMineCount]);
    }
  }
  for (let i = 0; i < mineLoc.length; i++) {
    const x = mineLoc[i][0];
    const y = mineLoc[i][1];
    const value = mineLoc[i][2];
    matrCopy[x][y] = value;
  }
  mineLoc = [];
  return matrCopy;
}
function minesweeper(matrix) {
  const newMatrix = replaceBools(matrix, true);
  return newMatrix;
}

module.exports = minesweeper;
