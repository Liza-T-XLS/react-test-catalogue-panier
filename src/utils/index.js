/* eslint-disable import/prefer-default-export */

export const priceRounderWithComma = (price) => (
  price.toFixed(2).replace(/\./g, ',')
);
