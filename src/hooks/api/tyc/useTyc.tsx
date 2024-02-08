import { useReactQuery } from "../useApi";
import { tycService } from "@/src/api/services/tyc/tyc.service";

export const useGetTycQuery = () => {
  return  useReactQuery('tyc' , tycService.get);
}
