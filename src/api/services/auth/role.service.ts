import { apiService } from "../http.service";
import { API } from "@/src/lib/constants";
import { IRoleResponse } from "@/src/interfaces/auth/role.interface";

/**
 * Validate Email before entering password , only ADMIN | TRADE users
 */
export const getRoleService = async (): Promise<IRoleResponse> => {
  const url = `${API.roles}`;
  const response = await apiService.get(url);
  return response.data;
};
