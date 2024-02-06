
import { IResponseAgegate } from "@/src/interfaces/agegate/agegate.interface";
import { apiService } from "../http.service";

export const getAgegateInfo = async (): Promise<IResponseAgegate> => {
  // const url = `${process.env.NEXT_PUBLIC_APP_URL}/${API.agegate}`;
  const url = `/mocks/agegate/getagegate.mock.json`;
  
  const response = await apiService.get(url);
  console.log("DATA agegate : ", response);
  
  return response.data ;
}