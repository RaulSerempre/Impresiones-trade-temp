"use client";

import { getRoleService } from "@/src/api/services/auth/role.service";
import { useMutation } from "@tanstack/react-query";

export const useRoleMutation = () => {
  const mutation = useMutation({
    mutationFn: getRoleService,
  });

  return {
    mutation
  };
};
