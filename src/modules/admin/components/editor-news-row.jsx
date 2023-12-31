import PropTypes from "prop-types";
import { useNewsDeleteMutation } from "src/hooks/query/use-news.js";
import { toDateTime } from "src/lib/strings.js";

function EditorNewsRow({ news, onSelected }) {
  const deleteMutation = useNewsDeleteMutation();

  function handleClick() {
    onSelected(news);
  }

  function handleDelete(event) {
    event.stopPropagation();
    deleteMutation.mutate(news.id);
  }

  const slicedContent = news.content.slice(0, 20);

  return (
    <tr onClick={handleClick}>
      <th>{news.id}</th>
      <td>{news.title}</td>
      <td>{slicedContent}</td>
      <td>{toDateTime(news.publishDate)}</td>
      <td>
        <button className="button" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

EditorNewsRow.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
  }).isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default EditorNewsRow;
