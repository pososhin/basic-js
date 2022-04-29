const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date ) {
  if (date === undefined) return "Unable to determine the time of year!";
  // console.log(date instanceof Date && !isNaN(date.valueOf()));
  try {
    if (!(date instanceof Date && !isNaN(date.valueOf())))
      throw new Error("Invalid date!");
  } catch (e) {
    throw new Error("Invalid date!");
  }

  return ["winter", "spring", "summer", "autumn"][
    Math.floor((date.getMonth() + 1) / 3) % 4
  ];
}

module.exports = {
  getSeason
};
