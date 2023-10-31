import PropTypes from "prop-types";
import { toBase64EncodedImage, toInputDate } from "src/lib/strings.js";

function EditorNewsCard({ data, label, onClosed, onSubmitted }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmitted(formData);
    onClosed();
  }

  function handleClick(event) {
    event.stopPropagation();
  }

  const date = data ? toInputDate(data.publishDate) : null;

  const image = data?.image && (
    <figure className="image is-128x128">
      <img className="is-128x128" src={toBase64EncodedImage(data.image)} alt="news image"/>
    </figure>
  );

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClosed}></div>
      <div className="box modal-content">
        <form onClick={handleClick} onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" name="title" defaultValue={data?.title} required/>
            </div>
          </div>

          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <textarea className="textarea" name="content" defaultValue={data?.content} required></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Publish Date</label>
            <div className="control">
              <input className="input" type="date" name="publishDate" defaultValue={date} required/>
            </div>
          </div>

          {image}

          <div className="field file has-name">
            <label className="file-label">
              <input className="file-input" type="file" name="image" accept="image/*"/>
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>

          <div className="control">
            <button className="button is-link" type="submit">{label}</button>
          </div>
        </form>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClosed}></button>
    </div>
  );
}

EditorNewsCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
  }),
  label: PropTypes.string.isRequired,
  onSubmitted: PropTypes.func.isRequired,
  onClosed: PropTypes.func.isRequired,
};

export default EditorNewsCard;
