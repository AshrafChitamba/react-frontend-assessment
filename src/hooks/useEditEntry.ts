import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiClient } from "../api";
import type { KnowledgeEntry } from "../types";
import { useRouter } from "@tanstack/react-router";

export const useEditEntry = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (updateData: KnowledgeEntry) => {
      const { data } = await apiClient.put(`/${updateData.id}`, updateData);

      if (data) {
        router.history.back();
      }
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
