'use strict'

let expect = require('chai').expect;
let numbers = require('../numbers');

describe("Give positive array of nums from 1 to limit", function() {
  it("where limit is less than 1", function() {
    expect(numbers.toCalculate(0)).to.be.an('array').that.is.empty;
    expect(numbers.toCalculate(-1)).to.be.an('array').that.is.empty;
    expect(numbers.toCalculate(-2)).to.be.an('array').that.is.empty;
  });

  it("where limit is greater than 0 and less than 11", function() {
    expect(numbers.toCalculate(1)).to.be.an('array').deep.equal([1]);
    expect(numbers.toCalculate(2)).to.be.an('array').deep.equal([1, 2]);
    expect(numbers.toCalculate(3)).to.be.an('array').deep.equal([1, 2, 3]);
    expect(numbers.toCalculate(4)).to.be.an('array').deep.equal([1, 2, 3, 4]);
    expect(numbers.toCalculate(5)).to.be.an('array').deep.equal([1, 2, 3, 4, 5]);
    expect(numbers.toCalculate(6)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6]);
    expect(numbers.toCalculate(7)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7]);
    expect(numbers.toCalculate(8)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(numbers.toCalculate(9)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(numbers.toCalculate(10)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("where limit is greater than 10", function() {
    expect(numbers.toCalculate(11)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numbers.toCalculate(10000)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numbers.toCalculate(100000000)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numbers.toCalculate(9999999999)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numbers.toCalculate(129102029191)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});