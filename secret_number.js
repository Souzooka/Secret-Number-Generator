'use strict';
module.exports = function secretNumberGenerator() {

  var secretNumberValue = _createSecretNumber();

  // you do know it is possible to get the same random number 3 times in a row, but if that happens I should quit this course and buy a lottery ticket.
  function _createSecretNumber() {
    return Math.floor(Math.random() * 1000001);
  }

  function getSecretNumber() {
    return secretNumberValue;
  }

  return getSecretNumber;

};