'use strict'

let toUpperCase = sentence => {
  if (typeof sentence != 'string') {
      return '';
  }
  
  return sentence.toUpperCase();
}

module.exports = {
  toUpperCase: toUpperCase,
}