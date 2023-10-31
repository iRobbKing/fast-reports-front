import PropTypes from "prop-types";
import usePagination from "src/hooks/use-pagination.js";
import { useNewsCount, useNewsList } from "src/hooks/query/use-news.js";
import { NEWS_PREFETCH_COUNT } from "src/query/news.js";
import NewsListPaginationBar from "src/components/news-list-pagination-bar.jsx";

function NewsList({ mapper }) {
  const pagination = usePagination();
  const newsQuery = useNewsList({
    pagination: {
      start: pagination.page * NEWS_PREFETCH_COUNT,
      count: NEWS_PREFETCH_COUNT
    },
  });
  const newsCountQuery = useNewsCount();

  const rows = (newsQuery.data ?? []).map(mapper);

  const count = Math.ceil(parseInt(newsCountQuery.data ?? 1) / NEWS_PREFETCH_COUNT);

  return (
    <>
      <NewsListPaginationBar
        pageCount={count}
        prevPage={pagination.prev}
        page={pagination.page}
        nextPage={pagination.next}
        onPageChanged={pagination.setPage}
      />
      <table className="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Content</th>
          <th>Publish Date</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </>
  );
}

NewsList.propTypes = {
  mapper: PropTypes.func.isRequired,
};

export default NewsList;
