export interface ICreatePasswordRequest {
  email: string,
  otp: string,
  password: string,
  passwordConfirmation: string
}


export interface ICreatePasswordResponse {
  email: string,
  otp: string,
  password: string,
  passwordConfirmation: string
}