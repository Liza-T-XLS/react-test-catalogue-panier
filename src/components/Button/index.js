// == Import npm

import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './button.scss';

// == Component

const Button = ({ label, colorCode }) => {
  const style = {
    background: colorCode,
  };

  return (
    <button className="button" type="submit" style={style}>
      {label}
    </button>
  );
};

// == PropTypes

Button.propTypes = {
  label: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
};

// == Export

export default Button;
