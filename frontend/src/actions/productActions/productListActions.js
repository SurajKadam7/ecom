import * as CONSTANT from "../../constants/productConstants";

import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: CONSTANT.PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: CONSTANT.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONSTANT.PRODUCT_LIST_FALI,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
