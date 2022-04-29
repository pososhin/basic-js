const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
   
  let string = ''+str || '';
  if(!options || typeof(options)!=='object' ) return '';
  let repeat = (options.hasOwnProperty('repeatTimes'))?options.repeatTimes:1;
  let s= (options.hasOwnProperty('separator') && options.separator!==null)?options.separator:'+';
  if(options.hasOwnProperty('addition')){
    string+=repeater(options.addition, {
        repeatTimes: (options.hasOwnProperty('additionRepeatTimes'))?options.additionRepeatTimes:1,
        separator: (options.hasOwnProperty('additionSeparator') && options.additionSeparator!==null)?options.additionSeparator:'|',
      })
  }
  return Array(repeat)
    .fill(string)
    .reduce((ret,x,i)=>ret+((i)?s:'')+x.toString(),'');
}

module.exports = {
  repeater
};
