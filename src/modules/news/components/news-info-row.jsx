import PropTypes from "prop-types";
import { toDateTime } from "src/lib/strings.js";

function NewsInfoRow({ news, onSelected }) {
  function handleClick() {
    onSelected(news);
  }

  return (
    <tr onClick={handleClick}>
      <th>{news.id}</th>
      <td>{news.title}</td>
      <td>{news.content}</td>
      <td>{toDateTime(news.publishDate)}</td>
    </tr>
  );
}

NewsInfoRow.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
  }).isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default NewsInfoRow;
