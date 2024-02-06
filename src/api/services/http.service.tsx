import axios from "axios";

export const apiService = axios.create({
  baseURL: "/",
  headers: {},
  // validateStatus: function (status) {
  //   return status == 404
  // }
});

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;
  if (statusCode && statusCode !== 401) {
    // remove data cache ad
    console.error(error);
  }

  return Promise.reject(error);
};

apiService.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
