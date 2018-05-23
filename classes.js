'use strict'

class User {
  constructor(name, lastName, email = '')  {
    this.name = this.checkName(name) ? name.trim() : '';
    this.lastName = this.checkName(lastName) ? lastName.trim() : '';
    this.email = this.checkEmail(email) ? email.trim() : '';
  }

  getFullName() {
    return `${this.name} ${this.lastName}`.trim();
  }

  getEmail() {
    return this.email;
  }

  checkName(name) {
    return /^[A-Za-z\s]{0,40}$/.test(name);
  }

  checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.trim());
  }
}

module.exports = {
  User: User,
}