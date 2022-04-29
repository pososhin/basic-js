const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(m) {
  if(!m[0] || m[0].length<1) return 0;
  let count = 0;
  let zerro = Array(m[0].length).fill(true);
  for (let i = 0; i < m.length; i++) 
    for (let j = 0; j < m[i].length; j++) {
      if(!m[i][j]) zerro[j] = false;
      if(!zerro[j]) continue;
      count+=m[i][j];
  }
  return count;
}

module.exports = {
  getMatrixElementsSum
};
