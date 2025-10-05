import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";
import type { KnowledgeEntry } from "../types";
import { apiClient } from "../api";

export const useFetchEntries = <T = KnowledgeEntry[]>(id?: string) => {
  return useQuery({
    queryKey: ["entries", id],
    queryFn: async () => {
      const { data } = await apiClient.get<any, AxiosResponse<T>>(
        id ? `/${id}` : "/"
      );

      return data;
    },
  });
};
