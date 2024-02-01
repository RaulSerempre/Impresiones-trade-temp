import { IApiResponse } from "../apiservice.interface"

/** Validate email Form*/
export interface IValidateEmailResponse extends IApiResponse {
  data: {
    title: string,
    message: string
  }
}

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