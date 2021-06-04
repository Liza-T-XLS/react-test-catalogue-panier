// == action types

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const SAVE_PRODUCT_TO_CART = 'SAVE_PRODUCT_TO_CART';

// == action creators

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});

export const saveProductToCart = (productId, productImg, productName, productQuantity, productPrice) => ({
  type: SAVE_PRODUCT_TO_CART,
  productId,
  productImg,
  productName,
  productQuantity,
  productPrice,
});
