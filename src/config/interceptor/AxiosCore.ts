import axios from "axios"
import { store } from "../../redux/store";

const axiosCore = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_MENU_DIGITAL
})

axiosCore.interceptors.request.use(config => {
    /* const authInfo = store.getState().auth.authInfo
    if(authInfo?.isLogged) {
        config.headers.Authorization =  `Bearer ${authInfo?.token}`;
    } */
return config
}, err => {
   console.log(err)
return Promise.reject(err)
})

export default axiosCore