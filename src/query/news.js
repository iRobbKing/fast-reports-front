const NEWS_PREFETCH_COUNT = 20;

export const newsKeys = {
  all: [{ scope: "news" }],
  lists: () => [{ ...newsKeys.all[0], entity: "list" }],
  list: (meta) => [{ ...newsKeys.lists()[0], meta }],
  detail: (id) => [{ ...newsKeys.all[0], entity: "detail", id }],
};

export function newsListQuery(api, meta) {
  return {
    queryKey: newsKeys.list(meta),
    queryFn: ({ queryKey: [{ meta }] }) => api.news.getAll(meta),
  };
}

export function newsListLoader({ api, queryClient }) {
  return async () => {
    const query = newsListQuery(api, { pagination: 0, count: NEWS_PREFETCH_COUNT });
    return await queryClient.ensureQueryData(query);
  };
}

export function newsDetailsQuery(api, id) {
  return {
    queryKey: newsKeys.detail(id),
    queryFn: ({ queryKey: [{ id }] }) => api.news.getById(id),
  };
}

export function newsDetailsLoader({ api, queryClient }) {
  return async ({ params: { newsId } }) => {
    const query = newsDetailsQuery(api, newsId);
    return await queryClient.ensureQueryData(query);
  };
}
