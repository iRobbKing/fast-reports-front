import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const blockerStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};

function EditorNewsCard({ data, label, onClosed, onSubmitted }) {
  const { register, handleSubmit } = useForm();

  const date = data ? data.publishDate.toISOString().slice(0, 10) : null;

  function onSubmit(updatedData) {
    onSubmitted({ ...data, ...updatedData, imageFile: updatedData.imageFile[0] });
  }

  function handleClick(event) {
    event.stopPropagation();
  }

  // TODO: handle validation errors.

  return (
    <div style={blockerStyles} onClick={onClosed}>
      <form onClick={handleClick} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue={data?.title} {...register("title", { required: true })}/>
        <textarea defaultValue={data?.content} {...register("content", { required: true })}></textarea>
        <a href={data?.imageUrl} download>Download</a>
        <input type="file" {...register("imageFile")}/>
        <input type="date" defaultValue={date} {...register("publishDate", { required: true, valueAsDate: true })}/>
        <input type="submit" value={label}/>
      </form>
    </div>
  );
}

EditorNewsCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
    publishDate: PropTypes.instanceOf(Date),
  }),
  label: PropTypes.string.isRequired,
  onSubmitted: PropTypes.func.isRequired,
  onClosed: PropTypes.func.isRequired,
};

export default EditorNewsCard;
