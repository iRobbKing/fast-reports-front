import { useNewsList } from "src/hooks/query/use-news.js";

const START_PAGE = 0;
const NEWS_ON_PAGE = 3;

function NewsRecentPage() {
  const {
    isPending,
    isError,
    isSuccess,
    data: news,
    error,
  } = useNewsList({ pagination: { start: START_PAGE, count: NEWS_ON_PAGE } });

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

export default NewsRecentPage;
