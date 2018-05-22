'use strict'

module.exports.toUpperCase = (sentence) => {
    if (typeof sentence != 'string') {
        return '';
    }
    
    return sentence.toUpperCase();
}