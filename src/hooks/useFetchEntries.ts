import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";
import type { KnowledgeEntry } from "../types";
import { apiClient } from "../api";

export const useFetchEntries = () => {
  return useQuery({
    queryKey: ["entries"],
    queryFn: async () => {
      const { data } = await apiClient.get<
        any,
        AxiosResponse<KnowledgeEntry[]>
      >("/");

      return data;
    },
  });
};
