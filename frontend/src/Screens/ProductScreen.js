import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TotalProductScreen from "../components/productScreenComponent/TotalProductScreen";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";

import Message from "../components/Message";
import Loader from "../components/Loader";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        {" "}
        Go Back{" "}
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <TotalProductScreen product={product} />
      )}
    </>
  );
};

export default ProductScreen;
