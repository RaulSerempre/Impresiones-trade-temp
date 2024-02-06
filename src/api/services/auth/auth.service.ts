import { apiService } from "../http.service";
import {
  IValidatePasswordResponse,
} from "@/src/interfaces/aurh/auth.interface";
import { INewPasswordRequest } from "@/src/lib/validations/new-password-form.validation";
import { IValidatePasswordRequest } from "@/src/lib/validations/password-form.validation";
import { signIn } from "@/app/auth.config";


const login = async (data: FormData) => {
  try {
    
    await signIn('credentials', data)
    } catch (error) {
      console.log("Ocurrio un error !! : ", error);
      throw Error(`CredentialsSignIn ${error}`)
  
      
    }
}

export const validatePasswordApi = async (
  data: IValidatePasswordRequest
): Promise<IValidatePasswordResponse> => {

  
  console.log("FETH : crete new password api execute : ", data);
  const res = await apiService.get("http://localhost:3000/mocks/createPasswordSuccess.mock.json");
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
