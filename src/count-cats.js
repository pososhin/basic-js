const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(e) {
  if (Array.isArray(e)) return e.reduce((s, x) => s + countCats(x), 0);
  return e && e == "^^" ? 1 : 0;
}

module.exports = {
  countCats
};
