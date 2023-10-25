import { useQuery } from "@tanstack/react-query";
import { useMatch } from "@tanstack/react-router";
import { useApi } from "src/hooks/use-api.jsx";
import apis from "src/modules/news/api/api.js";

function NewsDetailsPage() {
  const newsId = useMatch({
    select: ({ params }) => params.newsId,
  });

  const api = useApi(apis);

  const {
    isPending,
    isError,
    data: news,
  } = useQuery({
    queryKey: ["news", newsId],
    queryFn: () => api.news.getById(newsId),
  });

  if (isPending)
    return <div>Loading...</div>;

  if (isError)
    return <div>Error occurred.</div>;

  return (
    <div>
      <h4>{news.title}</h4>
      <p>{news.content}</p>
      <img src={news.image} alt="news image"/>
      <div>{news.publishDate}</div>
    </div>
  );
}

export default NewsDetailsPage;
