import { apiService } from "../http.service";
import {
  IValidateEmailResponse,
  IValidatePasswordResponse,
} from "@/src/interfaces/aurh/auth.interface";
import { AxiosError } from "axios";
import { IValidateEmailRequest } from "@/src/lib/validations";
import { INewPasswordRequest } from "@/src/lib/validations/new-password-form.validation";
import { IValidatePasswordRequest } from "@/src/lib/validations/password-form.validation";

const sleep = require('util').promisify(setTimeout)

/**
 * Validate Email before entering password , only ADMIN | TRADE users
 */
export const validateEmailApi = async (
  data: IValidateEmailRequest
): Promise<IValidateEmailResponse> => {
  
  console.log("PAYLOAD fn validateEmailApi: ", data);
  const response = await apiService.get("/mocks/validate-email/succes.mock.json");
  console.log("RESPONSE VALIDATE EMAIL API; ", response);
  return response.data;
};

export const validatePasswordApi = async (
  data: IValidatePasswordRequest
): Promise<IValidatePasswordResponse> => {
  console.log("FETH : crete new password api execute : ", data);
  const res = await apiService.get("/mocks/createPasswordSuccess.mock.json");
  console.log("USER DATA ; ", res.data);

  return res.data;
};

export const createNewPasswordApi = async (
  data: INewPasswordRequest
): Promise<any> => {
  console.log("FETH : crete new password api execute : ", data);
  const res = await apiService.get("/mocks/createPasswordSuccess.mock.json");
  console.log("USER DATA ; ", res.data);

  return res.data;
};

export interface ErrorType<Error> extends AxiosError<Error> {}
export type BodyType<BodyData> = BodyData;

