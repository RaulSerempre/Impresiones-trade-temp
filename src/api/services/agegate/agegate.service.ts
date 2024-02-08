
import { IResponseAgegate } from "@/src/interfaces/agegate/agegate.interface";
import { API } from "@/src/lib/constants";
import { apiService } from "../http.service";

export const getAgegateInfo = async (): Promise<IResponseAgegate> => {
  // const url = `${process.env.NEXT_PUBLIC_APP_URL}/${API.agegate}`;
  const url = API.agegate;
  
  const response = await apiService.get(url);
  return response.data ;
}