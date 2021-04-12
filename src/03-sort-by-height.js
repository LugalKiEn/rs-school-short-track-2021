/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusPosition = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr.splice(i, 1, 0);
      minusPosition.push(i);
      i--;
    }
  }
  arr.sort((a, b) => {
    if (a < b && a !== -1 && b !== -1) return -1;
    if (a > b && a !== -1 && b !== -1) return 1;
    return 0;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < minusPosition.length; i++) {
    arr.splice(minusPosition[i], 0, -1);
  }
  return arr;
}

module.exports = sortByHeight;
