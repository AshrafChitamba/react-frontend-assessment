import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiClient } from "../api";
import type { KnowledgeEntry } from "../types";
import { useRouter } from "@tanstack/react-router";

export const useAddEntry = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (uploadData: KnowledgeEntry) => {
      const { data } = await apiClient.post(`/`, uploadData);
      console.log({ data });
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
