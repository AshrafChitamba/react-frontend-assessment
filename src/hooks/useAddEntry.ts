import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiClient } from "../api";
import type { KnowledgeEntry } from "../types";

export const useAddEntry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (uploadData: KnowledgeEntry) => {
      const { data } = await apiClient.post(`/`, uploadData);
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
