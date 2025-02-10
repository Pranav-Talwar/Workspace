import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/Notes/NoteContext";
import Noteitem from "./Noteitem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    getNotes();
  }, []); 

  const [note, setNote] = useState({
    _id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  // Use a ref for the modal
  const modalRef = useRef(null);

  const updateNote = (currentnote) => {
    setNote({
      _id: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });

    // Show the modal using the ref
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (note.etitle.length < 3 || note.edescription.length < 3) {
      alert("Title and Description must be at least 3 characters long.");
      return;
    }

    // Call the editNote function from context
    await editNote(note._id, note.etitle, note.edescription, note.etag);

    // Hide the modal
    const modal = window.bootstrap.Modal.getInstance(modalRef.current);
    modal.hide();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Modal for Editing Notes */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef} // Attach the ref to the modal
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-secondary"> 
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="container my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
{notes.length === 0 && 'No notes to display'}
</div>
        <div className="row my-3">
          {notes.map((note) => (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;