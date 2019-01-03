import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  prepend,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group bmd-form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="material-icons">{prepend}</i>
          </span>
        </div>
        <input
          type={error ? 'text' : type}
          className={classnames('form-control', {
            'is-invalid': error
          })}
          placeholder={error ? error : placeholder}
          name={name}
          value={error ? error : value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text',
  prepend: ''
};

export default TextFieldGroup;
