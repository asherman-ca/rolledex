const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  console.log(data)

  data.text = !isEmpty(data.text) ? data.text : '';
  data.vector = !isEmpty(data.vector) ? data.vector : '';
  data.position = !isEmpty(data.position) ? data.position : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'Post must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (Validator.isEmpty(data.vector)) {
    errors.vector = 'Vector field is required';
  }

  if (Validator.isEmpty(data.position)) {
    errors.position = 'Position field is required';
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    } else if (!data.youtube.includes('http')) {
      errors.youtube = 'URL must include https'
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
