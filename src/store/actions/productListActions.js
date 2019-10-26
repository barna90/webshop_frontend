import {
  GET_PRODUCT_LIST,
} from "./actionTypes/productListActions";

export const getProductList = () => {
  return {
    type: GET_PRODUCT_LIST,
  };
};