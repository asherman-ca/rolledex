const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  data.date = !isEmpty(data.date) ? data.date : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required';
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = 'Date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
