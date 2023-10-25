import { useCallback, useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState(0);

  const canGoBack = 0 < page;

  const next = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const prev = useCallback(() => {
    if (canGoBack)
      setPage(page - 1);
  }, [canGoBack, page]);

  return { page, canGoBack, next, prev };
}
