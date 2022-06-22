import * as CONSTANT from "../../constants/productConstants.js";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case CONSTANT.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case CONSTANT.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case CONSTANT.PRODUCT_LIST_FALI:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
