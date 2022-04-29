const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper (m) {
  if(!m[0] || m[0].length<1) return 0;
  let count = 0;
  let zerro = Array(m.length)
  for(let i=0;i<zerro.length;i++) zerro[i]= [...m[i]].fill(0);
  const fn_set=(r,c)=>{
    if(r<0 || r>=m.length) return ;
    if(c<0 || c>=m[0].length) return ;
    zerro[r][c]++;
  }
  for (let i = 0; i < m.length; i++) 
    for (let j = 0; j < m[i].length; j++) {
      if(!m[i][j]) continue ;
      fn_set(i-1,j-1);
      fn_set(i-1,j);
      fn_set(i-1,j+1);
      fn_set(i,j-1);
      fn_set(i,j+1);
      fn_set(i+1,j-1);
      fn_set(i+1,j);
      fn_set(i+1,j+1);
  }
  return zerro;
}


module.exports = {
  minesweeper
};
