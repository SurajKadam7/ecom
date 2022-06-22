import asyncHanler from "express-async-handler";
import Product from "../models/productModels.js";

const getProducts = asyncHanler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

const getProductById = asyncHanler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

export { getProducts, getProductById };
