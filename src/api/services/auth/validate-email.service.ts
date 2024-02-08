import { IValidateEmailResponse } from "@/src/interfaces/auth";
import { IValidateEmailRequest } from "@/src/lib/validations";
import { apiService } from "../http.service";
import { API } from "@/src/lib/constants";

/**
 * Validate Email before entering password , only ADMIN | TRADE users
 */
export const validateEmailApiv2 = async (
  data: IValidateEmailRequest
): Promise<IValidateEmailResponse> => {
  const url = `${API.checkEmail}?email=${data.email}`;
  const response = await apiService.get(url);
  return response.data;
};
