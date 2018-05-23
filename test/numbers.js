'use strict'

const expect = require('chai').expect;
const numbers = require('../numbers');

describe("Give a positive array of nums from 1 to limit", function() {
  it("where limit is less than 1", function() {
    expect(numbers.calculate(0)).to.be.an('array').that.is.empty;
    expect(numbers.calculate(-1)).to.be.an('array').that.is.empty;
    expect(numbers.calculate(-2)).to.be.an('array').that.is.empty;
  });

  it("where limit is greater than 0 and less than 11", function() {
    expect(numbers.calculate(1)).to.be.an('array').deep.equal([1]);
    expect(numbers.calculate(2)).to.be.an('array').deep.equal([1, 2]);
    expect(numbers.calculate(3)).to.be.an('array').deep.equal([1, 2, 3]);
    expect(numbers.calculate(4)).to.be.an('array').deep.equal([1, 2, 3, 4]);
    expect(numbers.calculate(5)).to.be.an('array').deep.equal([1, 2, 3, 4, 5]);
    expect(numbers.calculate(6)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6]);
    expect(numbers.calculate(7)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7]);
    expect(numbers.calculate(8)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(numbers.calculate(9)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(numbers.calculate(10)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("where limit is greater than 10", function() {
    expect(numbers.calculate(11)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numbers.calculate(10000)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numbers.calculate(100000000)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numbers.calculate(9999999999)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(numbers.calculate(129102029191)).to.be.an('array').deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});