import { apiService } from "../http.service";
import { API } from "@/src/lib/constants";
import { ISendOtpResponse } from "@/src/interfaces/auth/send-otp.interface";

/**
 * Validate Email before entering password , only ADMIN | TRADE users
 */
export const sendOtpService = async (data: {
  email: string;
}): Promise<ISendOtpResponse> => {
  const url = `${API.sendOtp}?email=${data.email}`;
  const response = await apiService.get(url);
  return response.data;
};
