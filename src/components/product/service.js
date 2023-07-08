import axios from "axios";

const API_ADDRESS = "http://localhost:5500/products/";

export const productService = {
  getAllProducts: () => axios.get(API_ADDRESS),
  getProductById: (id) => axios.get(API_ADDRESS + id),
};
