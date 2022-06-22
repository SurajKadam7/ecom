import * as CONSTANT from "../../constants/productConstants";

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case CONSTANT.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case CONSTANT.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case CONSTANT.PRODUCT_DETAILS_FALI:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
