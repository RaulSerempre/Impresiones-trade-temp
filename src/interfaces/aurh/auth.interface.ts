import { IApiResponse } from "../apiservice.interface"
/** Validate Password Form */
export interface IValidatePasswordResponse extends IApiResponse {
  data: {
    title: string,
    message: string
  }
}

/** New Password Form */
export interface IValidatePasswordResponse extends IApiResponse {
  data: {
    title: string,
    message: string
  }
}