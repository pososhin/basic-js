const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let ret={};
  for(let d of domains){
    let parts=d.split('.');
    let next='';
    for(let i=parts.length-1; i>=0; i-- ){
      next+='.'+parts[i];
      ret[next]=1+((ret[next])?ret[next]:0);
    }
  }
  return ret;
}
module.exports = {
  getDNSStats
};
