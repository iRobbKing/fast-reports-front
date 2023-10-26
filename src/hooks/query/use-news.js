import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useApi } from "src/hooks/use-api.js";
import { newsDetailsQuery, newsKeys, newsListQuery } from "src/query/news.js";

export function useNewsList(meta) {
  const api = useApi();
  const query = newsListQuery(api, meta);
  return useQuery(query);
}

export function useNewsDetails(id) {
  const api = useApi();
  const query = newsDetailsQuery(api, id);
  return useQuery(query);
}

function useNewsMutation(mutationFn, queryKey = newsKeys.all) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}

export function useNewsCreateMutation() {
  const api = useApi();
  return useNewsMutation(api.news.create, newsKeys.lists());
}

export function useNewsUpdateMutation() {
  const api = useApi();
  return useNewsMutation(api.news.update);
}

export function useNewsDeleteMutation() {
  const api = useApi();
  return useNewsMutation(api.news.remove);
}
