import axiosClient from "./axiosClient";

const productServices = {
  readProductById: (id) => axiosClient.get(`product/${id}`),

  // readProductById: (id) => {
  //   const url = `product/${id}`;
  //   return axiosClient.get(url);
  // },
};

export default productServices;
