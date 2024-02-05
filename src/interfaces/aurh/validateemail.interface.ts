export interface IValidateEmailResponse {
  id: number;
  email: string;
  status: number;
  role: IValidateEmailRole;
}

export interface IValidateEmailRole {
  id: number;
  name: string;
}
