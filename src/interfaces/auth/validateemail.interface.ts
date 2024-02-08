export interface IValidateEmailResponse {
  id: number;
  email: string;
  status: number;
  blocked: boolean;
  role: IValidateEmailRole;
}

export interface IValidateEmailRole {
  id: number;
  name: string;
}

// Errors 
export interface IValidateEmailError {
  status: number,
  message?: string,
}
