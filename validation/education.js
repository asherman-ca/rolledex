const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  data.field = !isEmpty(data.field) ? data.field : '';
  data.to = !isEmpty(data.to) ? data.to : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From field is required';
  }

  // if (Validator.isEmpty(data.to)) {
  //   errors.to = 'To field is required';
  // }

  if (Validator.isEmpty(data.field)) {
    errors.field = 'Field field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
