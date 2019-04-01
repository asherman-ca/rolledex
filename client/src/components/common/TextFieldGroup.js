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
    <div
      className={classnames('form-group bmd-form-group', { 'mb-reset': error })}
    >
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="material-icons">{prepend}</i>
          </span>
        </div>
        <input
          type={type}
          className={classnames('form-control', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      {info && (
        <small className="form-text text-muted" style={{ marginLeft: '56px' }}>
          {info}
        </small>
      )}
      {error && <span style={{color:'red'}} className="description ml-5">{error}</span>}
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
