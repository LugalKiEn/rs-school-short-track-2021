/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString().split('');
  const arr = [];
  for (let i = 0; i < n.toString().length; i++) {
    const deleted = nStr.splice(i, 1);
    arr.push(Number.parseInt(nStr.join(''), 10));
    nStr.splice(i, 0, Number.parseInt(deleted.join(''), 10));
  }
  return Math.max.apply(null, arr);
}

module.exports = deleteDigit;
