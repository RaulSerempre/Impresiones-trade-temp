import { apiService } from "../http.service";
import { API } from "@/src/lib/constants";
import {
  ICreatePasswordRequest,
  ICreatePasswordResponse,
} from "@/src/interfaces/auth/create-password.interface";

/**
 * Validate Email before entering password , only ADMIN | TRADE users
 */
export const createPasswordService = async (
  data: ICreatePasswordRequest
): Promise<ICreatePasswordResponse> => {
  const url = `${API.createPassword}`;
  const response = await apiService.patch(url, data);
  return response.data;
};
