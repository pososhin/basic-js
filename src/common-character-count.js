const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {  
  const getHash = (s) => s.split("").reduce((o, c) => { o[c] = (o[c] ? o[c] : 0) + 1; return o;}, {});
  const h1 = getHash(s1);
  const h2 = getHash(s2);
  console.log(h1, h2);
  return Object.keys(h1).reduce((s, k) => s + ((!h1[k] || !h2[k])?0: ((h1[k] < h2[k])?h1[k] : h2[k])), 0);
}

module.exports = {
  getCommonCharacterCount
};
