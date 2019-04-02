const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRecoverInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (data.email === 'nothing') {
        errors.email = 'Email field is required';
    }

    return {
    errors,
    isValid: isEmpty(errors)
    };
}