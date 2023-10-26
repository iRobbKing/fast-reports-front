import PropTypes from "prop-types";
import { useNewsCreateMutation } from "src/hooks/query/use-news.js";
import EditorNewsCard from "src/modules/admin/components/editor-news-card.jsx";

function EditorNewsCreationCard({ onClosed }) {
  const createMutation = useNewsCreateMutation();

  function createNews(data) {
    // TODO: handle errors.
    createMutation.mutate(data);
  }

  return (
    <EditorNewsCard
      label="Update"
      onSubmitted={createNews}
      onClosed={onClosed}
    />
  );
}

EditorNewsCreationCard.propTypes = {
  onClosed: PropTypes.func.isRequired,
};

export default EditorNewsCreationCard;
