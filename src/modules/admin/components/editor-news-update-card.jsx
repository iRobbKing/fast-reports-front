import PropTypes from "prop-types";
import { useNewsUpdateMutation } from "src/hooks/query/use-news.js";
import EditorNewsCard from "src/modules/admin/components/editor-news-card.jsx";

function EditorNewsUpdateCard({ news, onClosed }) {
  const updateMutation = useNewsUpdateMutation();

  function updateNews(updatedNews) {
    // TODO: handle errors.
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
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
    publishDate: PropTypes.instanceOf(Date),
  }).isRequired,
  onClosed: PropTypes.func.isRequired,
};

export default EditorNewsUpdateCard;
