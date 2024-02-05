import { apiService } from "../http.service";
import {
  IValidatePasswordResponse,
} from "@/src/interfaces/aurh/auth.interface";
import { AxiosError } from "axios";
import { IValidateEmailRequest } from "@/src/lib/validations";
import { INewPasswordRequest } from "@/src/lib/validations/new-password-form.validation";
import { IValidatePasswordRequest } from "@/src/lib/validations/password-form.validation";
import { IValidateEmailResponse } from "@/src/interfaces/aurh";
import { signIn } from "@/app/auth.config";


/**
 * Validate Email before entering password , only ADMIN | TRADE users
 */
export const validateEmailApi = async (
  data: IValidateEmailRequest
): Promise<IValidateEmailResponse> => {
  console.log("Llegamos !!! ");
  
  try {
    
  await signIn('credentials', data)
  } catch (error) {
    console.log("Ocurrio un error !! : ", error);
    throw Error(`CredentialsSignIn ${error}`)

    
  }
  
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

