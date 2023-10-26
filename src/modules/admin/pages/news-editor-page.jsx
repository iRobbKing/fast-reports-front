import { useCallback, useState } from "react";
import { useNewsList } from "src/hooks/query/use-news.js";
import usePagination from "src/hooks/use-pagination.js";
import EditorNewsRow from "src/modules/admin/components/editor-news-row.jsx";
import EditorNewsUpdateCard from "src/modules/admin/components/editor-news-update-card.jsx";
import EditorNewsCreationCard from "src/modules/admin/components/editor-news-creation-card.jsx";

// TODO: handle all errors from query and mutations.

const NEWS_PER_PAGE = 10;

function NewsEditorPage() {
  const pagination = usePagination();
  const newsQuery = useNewsList({ pagination: { start: pagination.page, count: NEWS_PER_PAGE } });

  const [selectedCard, setSelectedCard] = useState(null);

  const openUpdateCard = useCallback((newsId) => {
    const news = newsQuery.data.find((news) => news.id === newsId);
    if (news) setSelectedCard({ type: "update", data: news });
  }, [newsQuery.data]);

  const openCreationCard = useCallback(() => {
    setSelectedCard({ type: "create" });
  }, []);

  const closeCard = useCallback(() => {
    setSelectedCard(null);
  }, []);

  const newsList = newsQuery.isSuccess && newsQuery.data.map((news) => (
    <EditorNewsRow
      key={news.id}
      {...news}
      onClicked={openUpdateCard}
    />
  ));

  const newsCard = selectedCard && (
    selectedCard.type === "update"
      ? <EditorNewsUpdateCard news={selectedCard.data} onClosed={closeCard}/>
      : <EditorNewsCreationCard onClosed={close}/>
  );

  if (newsQuery.isPending)
    return <div>Loading...</div>;

  if (newsQuery.isError)
    return <div>{newsQuery.error.toString()}</div>;

  return (
    <div>
      {newsList}
      <hr/>
      <button onClick={openCreationCard}>Add</button>
      <hr/>
      {newsCard}
    </div>
  );
}

export default NewsEditorPage;
