/* eslint-disable no-plusplus */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './quantitySelect.scss';

// == Component
const QuantitySelect = ({ maxQuantity }) => {
  const arr = [];
  for (let quantity = 1; quantity <= maxQuantity; quantity++) {
    arr.push(quantity);
  }

  return (
    <select className="productQuantity">{
      arr.map((arrRow) => (
        <option key={arrRow} value={arrRow}>{arrRow}</option>
      ))
    };
    </select>
  );
};

// == PropTypes

QuantitySelect.propTypes = {
  maxQuantity: PropTypes.number.isRequired,
};

// == Export

export default QuantitySelect;
