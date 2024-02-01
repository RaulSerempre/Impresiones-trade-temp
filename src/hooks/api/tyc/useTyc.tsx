import { useReactQuery } from "../useApi";
import { tycService } from "@/src/services/tyc/tyc.service";

export const useGetTycQuery = () => {
  console.log("Consume : useGetTycQuery");
  
  return  useReactQuery('tyc' , tycService.get);
}
