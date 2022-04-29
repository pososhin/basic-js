const { NotImplementedError } = require("../extensions/index.js");

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
  let ch = "";
  let count = 0;
  let ret = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ch) {
      if (count > 0) ret += (count > 1 ? count.toString() : "") + ch;
      ch = str[i];
      count = 1;
    } else {
      count += 1;
    }
  }
  return ret + (count > 1 ? count.toString() : "") + ch;
}

module.exports = {
  encodeLine,
};
