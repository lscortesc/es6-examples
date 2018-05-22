'use strict'

let expect = require('chai').expect;
let functions = require('../strings');

describe('String functions', function() {
    it('to uppercase with valid param', function() {
        expect(functions.toUpperCase('hellO')).to.equal('HELLO');
        expect(functions.toUpperCase('woRLd!')).to.equal('WORLD!');
        expect(functions.toUpperCase('es6')).to.equal('ES6');
        expect(functions.toUpperCase('_javascript_')).to.equal('_JAVASCRIPT_');
        expect(functions.toUpperCase('data::value')).to.equal('DATA::VALUE');
    });

    it('to uppercase with invalid param', function() {
        expect(functions.toUpperCase(12)).to.equal('');
        expect(functions.toUpperCase({})).to.equal('');
        expect(functions.toUpperCase(true)).to.equal('');
        expect(functions.toUpperCase(12.14)).to.equal('');
    });
});