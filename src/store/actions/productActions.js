import {
  GET_PRODUCT,
} from "./actionTypes/productActions";

export const getProduct = id => {
  return {
    type: GET_PRODUCT,
    id
  };
};