import { Link, useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import NewsList from "src/components/news-list.jsx";
import NewsInfoRow from "src/modules/news/components/news-info-row.jsx";

function NewsListPage() {
  const navigate = useNavigate({ from: "/news/list" });

  const handleSelect = useCallback(({ id }) => {
    navigate({ to: `/news/${id}` });
  }, [navigate]);

  const infoRowMapper = useCallback((news) => (
    <NewsInfoRow
      key={news.id}
      news={news}
      onSelected={handleSelect}
    />
  ), [handleSelect]);

  return (
    <div className="content box">
      <Link to="/news">Back</Link>
      <NewsList mapper={infoRowMapper} onlyPublished/>
    </div>
  );
}

export default NewsListPage;
