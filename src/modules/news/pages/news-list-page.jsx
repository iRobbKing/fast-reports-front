import usePagination from "src/hooks/use-pagination.js";
import { useNewsList } from "src/hooks/query/use-news.js";

const NEWS_PER_PAGE = 10;

function NewsListPage() {
  const pagination = usePagination();

  const {
    isPending,
    isError,
    isSuccess,
    data: news,
    error,
  } = useNewsList({ pagination: { start: pagination.start, count: NEWS_PER_PAGE } });

  if (isPending)
    return <div>Loading...</div>;

  if (isError)
    return <div>{error.toString()}</div>;

  const newsList = isSuccess && news.map((news) => (
    <div key={news.id}>
      <div>{news.title}</div>
      <img src={news.imageUrl} alt="news image"/>
      <div>{news.publishDate.toLocaleDateString()}</div>
    </div>
  ));

  return (
    <div>
      {newsList}
    </div>
  );
}

export default NewsListPage;
