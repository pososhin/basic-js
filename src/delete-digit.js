const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = n.toString().split('');  
  if(arr.length<2) return null;
  for(let i=0; i<arr.length-1; i++){
    if(arr[i]<arr[i+1]){
      delete arr[i];
      return Number(arr.join(''));
    } 
  }
  arr.pop();
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
