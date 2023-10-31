import { useState } from "react";

function usePagination() {
  const [page, setPage] = useState(0);

  const prev = page - 1;
  const next = page + 1;

  return { page, next, prev, setPage };
}

export default usePagination;
