import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiClient } from "../api";

export const useDeleteEntry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["entries"],
      });
    },
    onError: (error: unknown) => {
      console.error(error);
    },
  });
};
