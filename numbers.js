'use strict'

module.exports.toCalculate = (limit) => {
  let numbers = [];
  
  if (limit < 1) {
    return numbers;
  }

  if (limit == 1) {
    return [1];
  }

  if (limit > 10) {
    limit = 10;
  }

  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return numbers;
}