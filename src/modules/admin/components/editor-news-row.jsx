import PropTypes from "prop-types";
import { useNewsDeleteMutation } from "src/hooks/query/use-news.js";

function EditorNewsRow({ news, onClicked }) {
  const deleteMutation = useNewsDeleteMutation();

  function deleteNews(event) {
    event.stopPropagation();
    deleteMutation.mutate();
  }

  function handleClick() {
    onClicked(news.id);
  }

  const slicedContent = `${news.content.slice(0, 20)}...`;

  return (
    <div onClick={handleClick}>
      <div>{news.title}</div>
      <img src={news.imageUrl} alt="news image"/>
      <div>{slicedContent}</div>
      <div>{news.publishDate.toLocaleDateString()}</div>
      <button onClick={deleteNews}>Delete</button>
    </div>
  );
}

EditorNewsRow.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default EditorNewsRow;
