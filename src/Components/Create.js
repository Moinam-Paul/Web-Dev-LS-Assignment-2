import React, { useState } from "react"; //From Hooks
import './Create.css';

function Create(props) {
  const [note, update] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    update((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  }

  function submit(event) {
    props.onAdd(note);
    update({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="create-note p-3 border rounded">
      <form>
        <div>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="form-control mb-2"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Content"
            rows="3"
            className="form-control mb-2"
          />
        </div>
        <button className="btn btn-primary" onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default Create;
