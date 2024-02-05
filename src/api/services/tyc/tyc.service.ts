import { IResponseTyC } from "@/src/interfaces/tyc/tyc.interface";
import { apiService } from "../http.service";

export const tycService = {
  get: async (): Promise<IResponseTyC> => {
    const response = await apiService.get('/mocks/tyc.mock.json');
    return response.data ;
  }
}