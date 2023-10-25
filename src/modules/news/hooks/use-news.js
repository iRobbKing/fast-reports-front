import { useQuery } from "@tanstack/react-query";
import { useApi } from "src/hooks/use-api.jsx";
import apis from "src/modules/news/api.js";

export default function useNews(page, count) {
  const api = useApi(apis);

  const {
    isPending,
    isError,
    data: news,
  } = useQuery({
    queryKey: ["news-list", page, count],
    queryFn: () => api.news.getAll(page, page + count),
  });

  return { isPending, isError, news };
}
