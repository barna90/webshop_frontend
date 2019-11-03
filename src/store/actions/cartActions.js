import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "./actionTypes/cartActions";

//add cart action
export const addToCart = (product, variationId, selectedColor, selectedSize, quantity) => {
  return {
    type: ADD_TO_CART,
    product,
    variationId,
    selectedColor,
    selectedSize,
    quantity
  };
};
//remove item action
export const removeItem = (id, variationId) => {
  return {
    type: REMOVE_ITEM,
    id,
    variationId
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
