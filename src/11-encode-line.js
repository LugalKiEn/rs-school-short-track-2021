/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newStr = str.split('');
  let counter = 1;
  for (let i = 0; i < newStr.length; i++) {
    while (newStr[i] === newStr[i + 1]) {
      counter++;
      newStr.splice(i + 1, 1);
    }
    if (counter > 1) {
      newStr.splice(i, 1, `${counter}${newStr[i]}`);
    }
    counter = 1;
  }
  return newStr.join('');
}

module.exports = encodeLine;
