import { getAgegateInfo } from "@/src/api/services/agegate/agegate.service";
import { useReactQuery } from "../useApi";

export const useAgegateQuery = () => {
  return  useReactQuery('agegate' , getAgegateInfo);
}
