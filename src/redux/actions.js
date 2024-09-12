export const ADD_TO_CART = "ADD";
export const LIST_PRODUCTS = "LIST";
export const DELETE_FROM_CART = "DELETE";

// Action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const listProducts = () => ({
  type: LIST_PRODUCTS,
});

export const deleteFromCart = (productId) => ({
  type: DELETE_FROM_CART,
  payload: productId,
});
