import { GeneralTypes } from "../../types/general";

export const getLanding= (landing: any)=>({
  type: GeneralTypes.GET_LANDING,
  payload: landing
})