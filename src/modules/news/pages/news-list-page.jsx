import usePagination from "src/hooks/use-pagination.js";
import useNews from "src/modules/news/hooks/use-news.js";

const NEWS_PER_PAGE = 10;

function NewsListPage() {
  const pagination = usePagination();

  const {
    isPending,
    isError,
    news,
  } = useNews(pagination.page, NEWS_PER_PAGE);

  if (isPending)
    return <div>Loading...</div>;

  if (isError)
    return <div>Error occurred.</div>;

  const newsList = news.map((news) => (
    <div key={news.id}>
      <div>{news.title}</div>
      <img src={news.image} alt="news image"/>
      <div>{news.publishDate}</div>
    </div>
  ));

  return (
    <div>
      {newsList}
    </div>
  );
}

export default NewsListPage;
