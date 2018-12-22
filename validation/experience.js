const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.name = !isEmpty(data.title) ? data.title : '';
  data.location = !isEmpty(data.company) ? data.company : '';
  data.date = !isEmpty(data.from) ? data.from : '';

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
