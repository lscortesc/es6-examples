'use strict'

const expect = require('chai').expect;
const User = require('../classes').User;

describe('Give a User class', function() {

  it('with invalid first name and lastname', function() {
    let invalidUser1 = new User(12, '_*Cortés@'),
      invalidUser2 = new User(-19, 14.3),
      invalidUser3 = new User(12, 'Lanister'),
      invalidUser4 = new User('Jeff', 'example@domain.com')
    
    expect(invalidUser1).to.be.an.instanceOf(User);
    expect(invalidUser2).to.be.an.instanceOf(User);
    expect(invalidUser3).to.be.an.instanceOf(User);
    expect(invalidUser4).to.be.an.instanceOf(User);

    expect(invalidUser1.getFullName()).to.be.equal('');
    expect(invalidUser2.getFullName()).to.be.equal('');
    expect(invalidUser3.getFullName()).to.be.equal('Lanister');
    expect(invalidUser4.getFullName()).to.be.equal('Jeff');
  });

  it('with invalid email param', function() {
    expect((new User('Luis', 'Cortes', 'asda.com')).getEmail()).to.be.equal('');
    expect((new User('John', 'Doe', 'invalid_email')).getEmail()).to.be.equal('');
    expect((new User('Frank', 'Sinatra', 'Error in email')).getEmail()).to.be.equal('');
  });

  it('with valid email param', function() {
    expect((new User('Luis', 'Cortes', 'me@luiscortes.com ')).getEmail()).to.be.equal('me@luiscortes.com');
    expect((new User('John', 'Doe', 'john.doe@gmail.com')).getEmail()).to.be.equal('john.doe@gmail.com');
    expect((new User('Frank', 'Sinatra', 'frank_1917@info.com')).getEmail()).to.be.equal('frank_1917@info.com');
  });

  it('with valid construct params', function() {
    expect(new User('Luis', 'Cortes')).to.be.an.instanceOf(User);
    expect(new User('John', 'Doe', 'john@doe.com')).to.be.an.instanceOf(User);
  });

  it('with full name method', function() {
    expect((new User('Luis', 'Cortes')).getFullName()).to.be.equal('Luis Cortes');
    expect((new User('John', 'Doe')).getFullName()).to.be.equal('John Doe');
    expect((new User('Frank', 'Sinatra')).getFullName()).to.be.equal('Frank Sinatra');
  });
});

