import { useNewsList } from "src/hooks/query/use-news.js";
import { toBase64EncodedImage, toDateTime } from "src/lib/strings.js";
import { Link } from "@tanstack/react-router";

const START_PAGE = 0;
const NEWS_ON_PAGE = 3;

function NewsRecentPage() {
  const newsQuery = useNewsList({
    pagination: {
      start: START_PAGE,
      count: NEWS_ON_PAGE,
    },
  });

  const newsList = (newsQuery.data ?? []).map((news) => (
    <Link key={news.id} to={`/news/${news.id}`}>
      <div className="box m-3">
        <section className="section">
          <h1 className="title">{news.title}</h1>
        </section>
        <div>{news.content}</div>
          <figure className="image is-128x128">
            <img className="is-128x128" src={toBase64EncodedImage(news.image)} alt="news image"/>
          </figure>
        <div>{toDateTime(news.publishDate)}</div>
      </div>
    </Link>
  ));

  return (
    <>
      {newsList}
    </>
  );
}

export default NewsRecentPage;
