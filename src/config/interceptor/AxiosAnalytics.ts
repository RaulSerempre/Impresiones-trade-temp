import axios from "axios"
import { store } from "../../redux/store";

const axiosAnalytics = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ANALYTICS,
})

axiosAnalytics.interceptors.request.use(config => {
    /* const authInfo = store.getState().auth.authInfo
    if(authInfo?.isLogged) {
        config.headers.Authorization =  `Bearer ${authInfo?.token}`;
    } */
return config
}, err => {
   console.log(err)
return Promise.reject(err)
})

export default axiosAnalytics