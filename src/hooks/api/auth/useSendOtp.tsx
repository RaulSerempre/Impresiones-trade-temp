"use client";

import { sendOtpService } from "@/src/api/services/auth/send-otp.service";
import { useReactQuery } from "../useApi";
export const useSendOtp = (email: string) => {
  return  useReactQuery('otpcode' , ()=> sendOtpService({email}));
};