const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

class ChainMaker {
  constructor() {
    this.chain = [];
  }
  getLength() {
    return this.chain.length;
  }
  addLink(v) {
    let value = v === undefined ? "" : v === null ? "null" : v.toString();
    this.chain.push(value);
    return this;
  }
  removeLink(p) {
    if (
      !p ||
      typeof p !== "number" ||
      p < 1 ||
      p > this.getLength() ||
      !((p ^ 0) === p)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
      // return p+"<<<<<< dlldldldldldl";
    }
    this.chain.splice(p - 1, 1);
    return this;
  }
  reverseChain() {
    this.chain.reverse();
    return this;
  }
  finishChain() {
    const str = this.chain.reduce(
      (str, x, i) => str + (i ? "~~" : "") + "( " + x + " )",
      ""
    );
    this.chain = [];
    return str;
  }
}

const chainMaker = new ChainMaker();

module.exports = {
  chainMaker
};
