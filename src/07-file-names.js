/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesCopy = names;
  for (let i = 0; i < namesCopy.length; i++) {
    let counter = 0;
    const cur = namesCopy[i];
    for (let j = i; j >= 0; j--) {
      if (namesCopy[i] === namesCopy[j] && i !== j) {
        counter++;
        namesCopy.splice(i, 1, `${cur}(${counter})`);
        j = i;
      }
    }
  }
  return namesCopy;
}

module.exports = renameFiles;
