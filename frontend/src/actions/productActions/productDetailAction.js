import * as CONSTANT from "../../constants/productConstants";

import axios from "axios";

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CONSTANT.PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: CONSTANT.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONSTANT.PRODUCT_DETAILS_FALI,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
