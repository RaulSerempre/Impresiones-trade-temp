import axios, { AxiosError } from "axios";

export const apiService = axios.create({
  baseURL: 'https://api.dev.cantoexecution.com/',
  headers: {},
  // validateStatus: function (status) {
  //   return status == 404
  // }
});

const errorHandler = (error: AxiosError) => {
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
