export interface IValidateOtpRequest {
  email: string;
  otp: number;
}

export interface IValidateOtpResponse {
  id: number;
  email: string;
}
