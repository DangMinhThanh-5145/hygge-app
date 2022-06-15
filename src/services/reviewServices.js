const { default: axiosClient } = require("./axiosClient");

const readReviews = () => {
  const url = "/review/random";
  return axiosClient.get(url);
};

const reviewServices = {
  readReviews,
};

export default reviewServices;
