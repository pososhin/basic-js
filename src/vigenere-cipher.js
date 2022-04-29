const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const ABC = "A";
class VigenereCipheringMachine {
  constructor(direct) {
    this.dir = direct === undefined ? true : direct;
  }
  encrypt(f, k) {
    if (typeof f !== "string" || typeof k !== "string")
      throw new Error("Incorrect arguments!");
    let key = k.toUpperCase().split("");
    let r = this.crypt(f, k, (x, i) => {
      let shift = x.charCodeAt(0) - 65;
      let vshift = key[i % key.length].charCodeAt(0) - 65;
      if (shift > 25 || shift < 0) return x;
      let ch = 65 + ((shift + vshift) % 26);
      return String.fromCharCode(ch);
    });
    if (this.dir) return r.join("");
    else return r.reverse().join("");
  }
  crypt(f, k, fn) {
    const phrase = f.toUpperCase().split("");
    let fr = phrase
      .filter((x) => x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90)
      .map(fn);
    let r = [];
    for (let i = 0, j = 0; i < phrase.length; i++) {
      if (phrase[i].charCodeAt(0) >= 65 && phrase[i].charCodeAt(0) <= 90) {
        r.push(fr[j]);
        j++;
      } else {
        r.push(phrase[i]);
      }
    }
    return r;
  }
  decrypt(f, k) {
    if (typeof f !== "string" || typeof k !== "string")
      throw new Error("Incorrect arguments!");
    let key = k.toUpperCase().split("");
    let r = this.crypt(f, k, (x, i) => {
      let shift = x.charCodeAt(0) - 65;
      let vshift = key[i % key.length].charCodeAt(0) - 65;
      if (shift > 25 || shift < 0) return x;
      let ch = 65 + ((shift - vshift + 26) % 26);
      return String.fromCharCode(ch);
    });
    if (this.dir) return r.join("");
    else return r.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
