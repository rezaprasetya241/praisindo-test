import { useQuery } from "@tanstack/react-query";
import { Api } from "../../api/api";
import type { ListArticles } from "../../helper/types/article";

const api = Api.getInstance().getAxiosInstance();

export const useArticles = (e?: string) => {
  return useQuery<ListArticles>({
    queryKey: ["articles", e],
    queryFn: () =>
      api
        .get("/articlesearch.json", {
          params: {
            q: e,
          },
        })
        .then((res) => res.data.response),
  });
};
