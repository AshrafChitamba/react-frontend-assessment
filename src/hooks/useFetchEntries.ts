import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";
import type { KnowledgeEntry } from "../types";
import { apiClient } from "../api";
import { useState } from "react";
import { useDebounceValue } from "./useDebounceValue";

export const useFetchEntries = <T = KnowledgeEntry[]>(id?: string) => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounceValue(searchText);

  const query = useQuery({
    queryKey: ["entries", id ?? debouncedSearchText],
    queryFn: async () => {
      const { data } = await apiClient.get<any, AxiosResponse<T>>(
        id
          ? `/${id}`
          : `?title_like=${searchText}&description_like=${searchText}`
      );

      return data;
    },
  });

  return {
    ...query,
    searchText,
    setSearchText,
  };
};
