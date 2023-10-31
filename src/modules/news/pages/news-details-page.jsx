import { Link, useMatch } from "@tanstack/react-router";
import { useNewsDetails } from "src/hooks/query/use-news.js";
import { toBase64EncodedImage, toDateTime } from "src/lib/strings.js";

function NewsDetailsPage() {
  const newsId = useMatch({
    select: ({ params }) => params.newsId,
  });

  const { data: news } = useNewsDetails(newsId);

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="box modal-content">
        <section className="section">
          <h1 className="title">{news.title}</h1>
        </section>
        <Link to="/news/list">Back</Link>
        <div>{news.content}</div>
        <figure className="image is-128x128">
          <img className="is-128x128" src={toBase64EncodedImage(news.image)} alt="news image"/>
        </figure>
        <div>{toDateTime(news.publishDate)}</div>
      </div>
    </div>
  );
}

export default NewsDetailsPage;
