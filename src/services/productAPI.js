import axiosClient from "./axiosClient";
import queryString from "query-string";

const readProduct = (filter) => {
  const url = `/product?${queryString.stringify(filter)}`;
  return axiosClient.get(url);
};

const readNewestProduct = () => {
  const url = "/product/newest";
  return axiosClient.get(url);
};

const productAPI = {
  readProduct,
  readNewestProduct,
};

export default productAPI;
