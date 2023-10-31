export const NEWS_PREFETCH_COUNT = 12;

export const newsKeys = {
  all: [{ scope: "news" }],
  lists: () => [{ ...newsKeys.all[0], entity: "list" }],
  list: (meta) => [{ ...newsKeys.lists()[0], meta }],
  count: () => [{ ...newsKeys.all[0], entity: "count" }],
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
    const query = newsListQuery(api, {
      pagination: { start: 0, count: NEWS_PREFETCH_COUNT },
    });
    return await queryClient.ensureQueryData(query);
  };
}

export function newsCountQuery(api) {
  return {
    queryKey: newsKeys.count(),
    queryFn: () => api.news.getCount(),
  };
}

export function newsCountLoader({ api, queryClient }) {
  return async () => {
    const query = newsCountQuery(api);
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
