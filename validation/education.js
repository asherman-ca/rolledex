const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.gym = !isEmpty(data.gym) ? data.gym : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  // data.to = !isEmpty(data.to) ? data.to : '';

  if (Validator.isEmpty(data.gym)) {
    errors.gym = 'Gym field is required';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From field is required';
  }

  // if (Validator.isEmpty(data.to)) {
  //   errors.to = 'To field is required';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
