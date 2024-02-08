import { apiService } from "../http.service";
import { API } from "@/src/lib/constants";
import { IValidateOtpRequest, IValidateOtpResponse } from "@/src/interfaces/auth/validate-otp.interface";

/**
 * Validate Email before entering password , only ADMIN | TRADE users
 */
export const validateOtpService = async (data: IValidateOtpRequest): Promise<IValidateOtpResponse> => {
  const url = `${API.validateOtp}?email=${data.email}&otp=${data.otp}`;
  const response = await apiService.get(url);
  return response.data;
};
