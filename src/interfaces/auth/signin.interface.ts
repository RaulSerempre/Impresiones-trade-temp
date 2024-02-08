export interface ISignInRequest {
  identifier: string;
  password: string;
}

export interface ISignInResponse {
  jwt: string;
  user: IUserResponse;
}

interface IUserResponse {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  status: number;
  otp: number;
  otpExpiration: string;
}
