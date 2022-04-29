const { NotImplementedError } = require('../extensions/index.js');

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
function renameFiles(n) {
  let hash = {};
  let ret = [];
  for (let i = 0; i < n.length; i++) {
    hash[n[i]] = hash[n[i]] ? hash[n[i]] + 1 : 1;
    let name = n[i];
    if (hash[n[i]] > 1) {
      name += "(" + (hash[n[i]] - 1) + ")";
      hash[name] = 1;
    }
    ret.push(name);
  }
  return ret;
}


module.exports = {
  renameFiles
};
