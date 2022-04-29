const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  if (a === undefined);
  if (typeof a != "string" || a === undefined) return false;
  let activity = Number(a) || 0;
  if (activity <= 0 || activity>MODERN_ACTIVITY) return false;
  if (activity==MODERN_ACTIVITY) return 0;
  return Math.ceil((Math.log2(MODERN_ACTIVITY / activity)) * HALF_LIFE_PERIOD);
}

module.exports = {
  dateSample
};
