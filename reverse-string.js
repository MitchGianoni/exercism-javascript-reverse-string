'use strict';

// var String = function (value) {
//   this.value = value;
// };

// String.prototype.reverseString = function () {
//   return this.value.split('').reverse().join('');
// };

function reverseString(word) {
  return word.split('').reverse().join('');
}

module.exports = reverseString;

