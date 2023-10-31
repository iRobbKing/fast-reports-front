import { useCallback, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useSignOutMutation } from "src/hooks/query/use-auth.js";
import NewsList from "src/components/news-list.jsx";
import EditorNewsRow from "src/modules/admin/components/editor-news-row.jsx";
import EditorNewsCreationCard from "src/modules/admin/components/editor-news-creation-card.jsx";
import EditorNewsUpdateCard from "src/modules/admin/components/editor-news-update-card.jsx";

function NewsEditorPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleUpdateCardSelection = useCallback((news) => {
    setSelectedCard({ type: "update", data: news });
  }, []);

  const handleCreationCardSelection = useCallback(() => {
    setSelectedCard({ type: "create" });
  }, []);

  const handleCardClose = useCallback(() => {
    setSelectedCard(null);
  }, []);

  const newsCard = selectedCard && (
    selectedCard.type === "update"
      ? <EditorNewsUpdateCard news={selectedCard.data} onClosed={handleCardClose}/>
      : <EditorNewsCreationCard onClosed={handleCardClose}/>
  );

  const editorRowMapper = useCallback((news) => (
    <EditorNewsRow
      key={news.id}
      news={news}
      onSelected={handleUpdateCardSelection}
    />
  ), [handleUpdateCardSelection]);

  const signOutMutation = useSignOutMutation();
  const navigate = useNavigate({ from: "/admin/editor" });

  function handleSignOut() {
    signOutMutation.mutate();
    handleReturn();
  }

  function handleReturn() {
    navigate({ to: "/news" });
  }

  return (
    <div className="content box">
      <header>
        <button className="button is-link m-1" onClick={handleSignOut}>Sign Out</button>
        <button className="button is-link m-1" onClick={handleReturn}>Back</button>
      </header>
      <NewsList mapper={editorRowMapper}/>
      <div className="control">
        <button className="button is-link" onClick={handleCreationCardSelection}>Create New</button>
      </div>
      {newsCard}
    </div>
  );
}

export default NewsEditorPage;
