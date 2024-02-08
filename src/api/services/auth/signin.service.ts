import {
  ISignInRequest,
  ISignInResponse,
} from "@/src/interfaces/auth/signin.interface";
import { apiService } from "../http.service";
import { API } from "@/src/lib/constants";
import { AxiosError } from "axios";

export const signInService = async (
  data: ISignInRequest
): Promise<ISignInResponse> => {
  try{
    const url = `https://api.dev.cantoexecution.com/${API.sigin}`;
    const response = await apiService.post(url, data);
    return response.data;
  }catch(e) {
    console.log("ERROR EN SERVICIO ");
    if(e instanceof AxiosError) throw e.response?.data
    throw 'unknownerror'
  }
    
};
