// == action types

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

// == action creators

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});
