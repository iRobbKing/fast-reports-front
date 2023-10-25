import useNews from "src/modules/news/hooks/use-news.js";

const START_PAGE = 0;
const NEWS_ON_PAGE = 3;

function NewsRecentPage() {
  const {
    isPending,
    isError,
    news,
  } = useNews(START_PAGE, NEWS_ON_PAGE);

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

export default NewsRecentPage;
