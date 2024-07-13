import React, { useState } from "react";
import Create from "./Create";
import './Body.css';

function Body() {
  const [notes, set] = useState([]);

  function add(newNote) {
    set((previous) => {
      return [...previous, newNote];
    });
  }

  function del(id) {
    set((previous) => {
      return previous.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Create onAdd={add} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note m-2 p-3 border rounded">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button className="btn custom-button" onClick={() => del(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
