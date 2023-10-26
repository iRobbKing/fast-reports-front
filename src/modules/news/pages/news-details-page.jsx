import { useMatch } from "@tanstack/react-router";
import { useNewsDetails } from "src/hooks/query/use-news.js";

function NewsDetailsPage() {
  const newsId = useMatch({
    select: ({ params }) => params.newsId,
  });

  // TODO: router prefetch.
  const {
    isPending,
    isError,
    data: news,
    error,
  } = useNewsDetails(newsId);

  if (isPending)
    return <div>Loading...</div>;

  if (isError)
    return <div>{error.toString()}</div>;

  return (
    <div>
      <h4>{news.title}</h4>
      <p>{news.content}</p>
      <img src={news.imageUrl} alt="news image"/>
      <div>{news.publishDate.toLocaleDateString()}</div>
    </div>
  );
}

export default NewsDetailsPage;
