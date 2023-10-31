import PropTypes from "prop-types";
import { useNewsUpdateMutation } from "src/hooks/query/use-news.js";
import EditorNewsCard from "src/modules/admin/components/editor-news-card.jsx";

function EditorNewsUpdateCard({ news, onClosed }) {
  const updateMutation = useNewsUpdateMutation();

  function updateNews(updatedNews) {
    updatedNews.set("id", news.id);
    updateMutation.mutate(updatedNews);
  }

  return (
    <EditorNewsCard
      data={news}
      label="Update"
      onSubmitted={updateNews}
      onClosed={onClosed}
    />
  );
}

EditorNewsUpdateCard.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
  }).isRequired,
  onClosed: PropTypes.func.isRequired,
};

export default EditorNewsUpdateCard;
