/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  let count = 0;
  if (arr.length !== 6) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    const arrArr = arr[i].split('');
    for (let j = 0; j < arrArr.length; j++) {
      if (arrArr[j] >= 0 && arrArr[j] <= 9) {
        count++;
      } else if (arrArr[j] >= 'A' && arrArr[j] <= 'F') {
        count++;
      }
    }
  }
  if (count === arr.length * 2) {
    return true;
  }
  return false;
}

module.exports = isMAC48Address;
