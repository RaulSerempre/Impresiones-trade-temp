import { IValidateEmailResponse } from "@/src/interfaces/aurh";
import { IValidateEmailRequest } from "@/src/lib/validations";
import { apiService } from "../http.service";

/**
 * Validate Email before entering password , only ADMIN | TRADE users
 */
export const validateEmailApiv2 = async (
  data: IValidateEmailRequest
): Promise<IValidateEmailResponse> => {
  try {
    /** Success */
    // throw "generate error";
    const url = `/mocks/validate-email/succes.mock.json`;
    console.log("PAYLOAD fn validateEmailApi: ", data);
    const response = await apiService.get(url);
    console.log("RESPONSE VALIDATE EMAIL API; ", response);
    return response.data;
  } catch (error) {
    /** Error */
    const urlError = `/mocks/validate-email/error.mock.json`;
    const responseError = await apiService.get(urlError);
    throw responseError;
  }
};
