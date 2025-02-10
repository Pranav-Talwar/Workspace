// AddNote component
import React, { useContext, useState } from 'react';
import NoteContext from "../context/Notes/NoteContext";

function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "default" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (note.title.length < 3 || note.description.length < 3) {
      alert("Title and Description must be at least 3 characters long.");
      return;
    }

    await addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "default" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
}

export default AddNote;
